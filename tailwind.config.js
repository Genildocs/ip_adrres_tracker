/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        very_dark_gray: 'hsl(0, 0%, 17%)',
        dark_gray: 'hsl(0, 0%, 59%)',
      },
    },
  },
  plugins: [],
};
