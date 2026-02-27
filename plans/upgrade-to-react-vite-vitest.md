# Upgrade Plan: React 16 + CRA → React 19 + Vite + Vitest

## Overview

This document outlines the steps to migrate the Classup app from **React 16 / Create React App (CRA)** to **React 19 / Vite / Vitest**. The goal is to modernise the toolchain, reduce build times, and align the project with the current React ecosystem.

---

## Current Stack

| Concern        | Current                          |
|----------------|----------------------------------|
| React version  | 16.13.1                          |
| Build tool     | Create React App (react-scripts) |
| Test runner    | Jest (via react-scripts)         |
| Test utilities | Enzyme + enzyme-adapter-react-16 |
| CSS            | node-sass (SCSS modules)         |
| Deploy         | gh-pages                         |

## Target Stack

| Concern        | Target                           |
|----------------|----------------------------------|
| React version  | 19 (latest)                      |
| Build tool     | Vite 6                           |
| Test runner    | Vitest                           |
| Test utilities | @testing-library/react           |
| CSS            | sass (modern Dart Sass)          |
| Deploy         | gh-pages (unchanged)             |

---

## Step-by-Step Migration

### 1. Remove CRA and install Vite

```bash
# Remove CRA tooling
npm uninstall react-scripts

# Install Vite and the React plugin
npm install --save-dev vite @vitejs/plugin-react
```

Create **`vite.config.js`** in the project root:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Classup/',   // matches homepage in package.json
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
```

### 2. Add an HTML entry point

Vite requires a top-level `index.html` (not inside `public/`). Move or copy
`public/index.html` to the project root and update the body to reference the
JS entry point:

```html
<!-- index.html (project root) -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Classup</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.js"></script>
  </body>
</html>
```

Static assets that were previously served from `public/` are still supported:
place them in `public/` and Vite will copy them to the output directory.

### 3. Upgrade React to version 19

```bash
npm install react@latest react-dom@latest
```

React 19 removes several deprecated APIs. Key changes to make in the source:

- **Class components** (`App`, `ErrorBoundary`, etc.) — convert to function
  components with hooks, or keep them (React 19 still supports class
  components, but the new features like `use` and server actions are hooks-only).
- **`ReactDOM.render`** → **`ReactDOM.createRoot`**

  ```js
  // src/index.js — before
  import ReactDOM from 'react-dom';
  ReactDOM.render(<App />, document.getElementById('root'));

  // src/index.js — after
  import { createRoot } from 'react-dom/client';
  createRoot(document.getElementById('root')).render(<App />);
  ```

- Remove `registerServiceWorker.js` import (deprecated / unused in modern CRA
  versions and not needed with Vite).
- **`node-sass`** is incompatible with Node 18+. Replace it with Dart Sass:

  ```bash
  npm uninstall node-sass
  npm install --save-dev sass
  ```

### 4. Update `package.json` scripts

```json
{
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

> **Note:** Vite outputs to `dist/` by default (not `build/`). Update
> `gh-pages` accordingly and add `dist/` to `.gitignore`.

### 5. Set up Vitest

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

Add Vitest configuration to **`vite.config.js`**:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Classup/',
  css: {
    modules: { localsConvention: 'camelCase' },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
```

### 6. Migrate tests from Enzyme to Testing Library

Enzyme does not support React 19 and has no maintained adapter for React 17+.
All tests must be rewritten using `@testing-library/react`.

```bash
npm uninstall enzyme enzyme-adapter-react-16 enzyme-to-json react-test-renderer
```

**Replace `src/setupTests.js`:**

```js
// src/setupTests.js
import '@testing-library/jest-dom';
```

**Example — migrating `App.test.js`:**

```js
// Before (Enzyme)
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);
it('renders without crashing', () => {
  expect(app).toMatchSnapshot();
});

// After (Testing Library + Vitest)
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
  // Assert something visible in the app
  expect(document.body).toBeTruthy();
});
```

Apply the same pattern to every other test file in the project.

### 7. Remove snapshot tests (optional)

Enzyme snapshots are not compatible with Testing Library. Either delete
existing `__snapshots__` directories or rewrite them as DOM-based assertions.

### 8. Update `.gitignore`

Ensure the following entries are present:

```
# Vite build output
dist/

# Vite cache
.vite/
```

Remove any CRA-specific entries that are no longer relevant (e.g., `build/`
can be kept if you want to preserve the old output directory reference, or
removed if `dist/` is now used).

### 9. Clean up and verify

```bash
# Remove old lock-file artifacts and reinstall
rm -rf node_modules package-lock.json
npm install

# Verify development server starts
npm start

# Verify production build
npm run build

# Verify tests pass
npm test
```

---

## Compatibility Notes

| Item | Note |
|------|------|
| SCSS modules | Fully supported by Vite with `sass` package. |
| JSON data files (`allquestions.json`) | Move to `public/` if not already there; reference via absolute path `/allquestions.json`. |
| Axios | No changes required. |
| Context API | No changes required. |
| `react-test-renderer` | Not needed with Testing Library; uninstall. |

---

## References

- [Vite documentation](https://vitejs.dev/)
- [Vitest documentation](https://vitest.dev/)
- [React 19 release notes](https://react.dev/blog/2024/12/05/react-19)
- [Testing Library — React](https://testing-library.com/docs/react-testing-library/intro/)
- [Migrating from CRA to Vite](https://vitejs.dev/guide/migration)
