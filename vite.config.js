import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { transform } from 'esbuild';

const jsxInJsPlugin = {
  name: 'jsx-in-js',
  enforce: 'pre',
  async transform(code, id) {
    if (!id.match(/\.js$/) || id.includes('node_modules')) return null;
    const result = await transform(code, { loader: 'jsx', jsx: 'automatic', sourcemap: true });
    return { code: result.code, map: result.map || null };
  },
};

export default defineConfig({
  plugins: [jsxInJsPlugin, react()],
  base: '',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
