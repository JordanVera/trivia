/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
    boxShadow: {
      neumorphic: '4px 4px 8px #3b3b3b, -4px -4px 8px #4d4d4d',
      'neumorphic-inset':
        'inset 4px 4px 8px #3b3b3b, inset -4px -4px 8px #4d4d4d',
    },
  },
};
