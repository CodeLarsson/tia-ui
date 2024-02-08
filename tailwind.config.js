/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [],
  prefix: 'tia-',
  jit: true,
  corePlugins: {
    preflight: false
  }
};