/// <reference types="vitest" />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  build: {
    lib: {
      formats: ['es'],
      entry: './lib/index.ts', // Specifies the entry point for building the library.
      name: 'tia-ui', // Sets the name of the generated library.
      fileName: 'tia-ui' // Generates the output file name based on the format.
    },
    rollupOptions: {
      external: ['react', 'react-jsx-runtime', 'tailwindcss']
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true // Clears the output directory before building.
  },
  plugins: [cssInjectedByJsPlugin(), dts()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts'
  }
});
