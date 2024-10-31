/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          extralight: '#845BC8',
          light: '#7D53CD',
          DEFAULT: '#9525BE',
          dark: '#520057',
          darkness: '#320057',
          card: '#C584F5',
          bg: '#6125C5',
          
        },
        violet: {
          light: '#8456CB',
          DEFAULT: '#57128B',
          dark: '#230057',
        },
        white: '#FFF7FF',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'mb': '375px',
        '2mb': '390px',
        '3mb': '430px',
        'tb': '768px',
        '2tb': '820px',
        '3tb': '1024px',
        'dk': '1280px',
        '2dk': '1440px',
        '3dk': '1728px',
        '4dk': '2048px',
        '2xl': '1536px',  
        '3xl': '1700px',  
      },
      overflow: {
        'x-hidden': 'hidden',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
};
