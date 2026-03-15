# TypeScript Upgrade Plan for Classup

## Current State

The Classup repository is a **React 19 + Vite** single-page application written entirely in plain JavaScript (ES6+). Key observations:

| Aspect | Current Status |
|---|---|
| Language | Pure JavaScript (53 `.js` files) |
| Type Checking | None |
| Linting | None |
| Code Formatting | None |
| TypeScript Config | None |
| Build Tool | Vite 7 (already supports TypeScript natively) |
| Test Framework | Vitest 4 (already supports TypeScript natively) |
| React Version | React 19 (full TypeScript support available) |
| Component Style | Mix of class-based and functional components |

---

## Goals

- Introduce strict, modern TypeScript to catch type errors at development time.
- Add ESLint with TypeScript-aware rules for code quality.
- Add Prettier for consistent code formatting.
- Migrate all source and test files from `.js` / `.jsx` to `.ts` / `.tsx`.
- Type all component props, context values, and utility functions explicitly.
- Integrate type-checking into the CI/CD pipeline.
- Preserve all existing functionality — this is a tooling upgrade, not a feature change.

---

## Phase 1 — Tooling Setup

> **Goal:** Install all required packages and add configuration files. No source files are renamed or modified yet.

### 1.1 Install Dependencies

```bash
# TypeScript core
npm install --save-dev typescript

# React type definitions
npm install --save-dev @types/react @types/react-dom

# ESLint + TypeScript ESLint support
npm install --save-dev eslint @eslint/js typescript-eslint

# Prettier + integration with ESLint
npm install --save-dev prettier eslint-config-prettier

# Axios type definitions (axios ships its own types from v1, no extra package needed)
```

### 1.2 Add `tsconfig.json`

Create a strict `tsconfig.json` at the project root:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Strict mode */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

### 1.3 Add `eslint.config.js`

Create a flat ESLint config using the modern flat-config format:

```js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'build'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  }
);
```

### 1.4 Add `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

### 1.5 Update `vite.config.js` → `vite.config.ts`

- Remove the custom `jsxInJsPlugin` (it was needed only because `.js` files contained JSX).
- Enable TypeScript in the Vite config itself.
- The resulting config will be simpler since Vite handles `.tsx` natively.

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
});
```

### 1.6 Add npm Scripts

Update `package.json` `scripts` section:

```json
"scripts": {
  "start": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview",
  "test": "vitest run",
  "test:watch": "vitest",
  "lint": "eslint .",
  "format": "prettier --write src/",
  "type-check": "tsc --noEmit"
}
```

---

## Phase 2 — File-by-File Migration

> **Goal:** Rename every `.js` file to `.ts` or `.tsx` and fix the resulting TypeScript compiler errors. Do this **incrementally** — one component or folder at a time so errors remain manageable.

### Migration Order (suggested, lowest-risk first)

| Order | Target | Reason |
|---|---|---|
| 1 | `src/Utility/` | Pure functions, no JSX, fewest dependencies |
| 2 | `src/context/` | Typed context eliminates many downstream prop-type gaps |
| 3 | `src/components/UI/` | Small, isolated leaf components |
| 4 | `src/components/` (rest) | Core UI, depends on context types being ready |
| 5 | `src/hoc/` | HOCs wrapping already-typed components |
| 6 | `src/containers/` | Highest complexity; class components may be converted to functional |
| 7 | `src/App.js` → `src/App.tsx` | Top-level component |
| 8 | `src/index.js` → `src/main.tsx` | Entry point (rename follows Vite convention) |
| 9 | `src/setupTests.js` → `src/setupTests.ts` | Test setup |
| 10 | All `*.test.js` files | 18 test files, converted last once source types are stable |

### Per-File Steps

For each file:

1. **Rename** the file: `.js` → `.ts` (no JSX) or `.tsx` (contains JSX).
2. **Run `tsc --noEmit`** to surface all type errors in that file.
3. **Add prop interfaces** for every React component:

   ```ts
   interface SoundToggleProps {
     soundOn: boolean;
     soundHandler: () => void;
   }

   const SoundToggle = ({ soundOn, soundHandler }: SoundToggleProps) => { ... };
   ```

4. **Add return types** to non-trivial functions.
5. **Fix all compiler errors** before moving to the next file.

### Class Component Consideration

The `src/containers/` folder uses class-based React components. These can be typed by extending `React.Component<Props, State>`, but this is also a good opportunity to convert them to functional components with hooks:

```ts
// Before (class)
class LearningContainer extends React.Component { ... }

// After (functional) — preferred
const LearningContainer = (props: LearningContainerProps) => { ... };
```

Note: Avoid `React.FC` — it is no longer recommended in modern React + TypeScript projects (it was removed from Create React App's TypeScript template). Prefer explicit prop destructuring instead:

```ts
// Preferred
const LearningContainer = (props: LearningContainerProps) => { ... };

// Or with inline destructuring
const LearningContainer = ({ questions, score }: LearningContainerProps) => { ... };
```

Converting to functional components is **recommended but optional** for this migration.

---

## Phase 3 — Type the Data Layer

> **Goal:** Add types for the JSON data (`allquestions.json`) and all context/state shapes.

### 3.1 Question Data Types

Create `src/types/questions.ts`:

```ts
export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  text: string;
  sound?: string;
  answers: Answer[];
}

export type QuestionsData = Question[];
```

Import and use these types wherever `allquestions.json` is consumed and throughout context/containers.

### 3.2 Context Types

Type each React context value explicitly so that all consumers benefit from auto-complete and type safety.

---

## Phase 4 — CI/CD Integration

> **Goal:** Ensure that TypeScript type errors block CI builds.

### 4.1 Update GitHub Actions Workflows

In `.github/workflows/test.yml` (and `deploy.yml`), add a type-checking step **before** the build step:

```yaml
- name: Type Check
  run: npm run type-check

- name: Lint
  run: npm run lint
```

### 4.2 Add Pre-commit Hook (Optional)

Use `husky` + `lint-staged` to run type-checking and linting on staged files before every commit, preventing type errors from ever entering the branch:

```bash
npm install --save-dev husky lint-staged
npx husky init
```

`.husky/pre-commit`:
```sh
npx lint-staged
```

`package.json`:
```json
"lint-staged": {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
}
```

---

## Phase 5 — Strict Mode Cleanup

> **Goal:** After migration is complete, enable full strict-mode checks and resolve any remaining warnings.

- Set `"strict": true` in `tsconfig.json` (already set in Phase 1, but address any remaining suppressions now).
- Remove any temporary `// @ts-ignore` or `// @ts-expect-error` comments added during migration.
- Address all `@typescript-eslint/no-explicit-any` warnings — replace `any` with proper types.
- Enable `noUnusedLocals` and `noUnusedParameters` and clean up dead code.

---

## Estimated Effort

| Phase | Work Items | Estimated Effort |
|---|---|---|
| Phase 1 — Tooling Setup | Config files, package installs | ~2 hours |
| Phase 2 — File Migration | 53 `.js` → `.ts`/`.tsx` files | ~8–12 hours |
| Phase 3 — Data Layer Types | Question types, context types | ~2 hours |
| Phase 4 — CI/CD | Workflow updates, optional husky | ~1 hour |
| Phase 5 — Strict Cleanup | Resolve all warnings/any | ~2–3 hours |
| **Total** | | **~15–20 hours** |

---

## Key Dependencies to Add

| Package | Purpose | Type |
|---|---|---|
| `typescript` | TypeScript compiler | devDependency |
| `@types/react` | React type definitions | devDependency |
| `@types/react-dom` | ReactDOM type definitions | devDependency |
| `eslint` | Linter | devDependency |
| `@eslint/js` | ESLint core recommended rules | devDependency |
| `typescript-eslint` | TypeScript-aware ESLint rules | devDependency |
| `prettier` | Code formatter | devDependency |
| `eslint-config-prettier` | Disables ESLint rules that conflict with Prettier | devDependency |
| `husky` *(optional)* | Git pre-commit hooks | devDependency |
| `lint-staged` *(optional)* | Run linters on staged files only | devDependency |

No new **production** dependencies are required.

---

## Risk & Mitigation

| Risk | Mitigation |
|---|---|
| Large number of files to migrate (53) | Migrate incrementally, folder by folder; keep CI green at each step |
| Class components harder to type | Convert to functional components with hooks at migration time |
| JSON data (`allquestions.json`) lacks a schema | Define types manually in Phase 3; consider adding a JSON schema for validation |
| Test files may need significant changes | Migrate test files last, after source types are stable |
| CI pipeline may break during migration | Use a feature branch; only merge when all phases are complete and CI is green |

---

## Non-Goals

The following are explicitly **out of scope** for this migration:

- Adding new features or changing application behavior.
- Changing the styling system (SCSS stays as-is).
- Migrating to a different build tool or test runner.
- Adding runtime validation libraries (e.g., Zod) — this is a compile-time typing exercise.
