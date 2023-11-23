/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#d8eefe',
        headline: '#094067',
        subheadline: '#5f6c7b',
        cardBackground: '#fffffe',
        cardHeading: '#094067',
        cardParagraph: '#5f6c7b',
        icons: {
          stroke: '#094067',
          main: '#fffffe',
          highlight: '#3da9fc',
          secondary: '#90b4ce',
          tertiary: '#ef4565',
        },
      },
    },
  },
  plugins: [],
};
