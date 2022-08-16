/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#205375',
        'dark': '#112b3c',
        'light': '#efefef',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
