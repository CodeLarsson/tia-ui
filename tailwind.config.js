/** @type {import('tailwindcss').Config} */
import { theme } from './tailwind.theme.js';
export default {
  content: [
    '!./lib/**/__test__/**/*.test.*',
    '!./lib/**/__docs__/**/Example.*',
    '!./lib/**/__docs__/**/*.stories.*',
    './lib/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      ...theme
    }
  },
  plugins: [],
  prefix: 'tia-',
  jit: true,
  corePlugins: {
    preflight: false
  }
};
