const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      "trucks-blue": {
        50: '#A3D7FF',
        100: '#8FCEFF',
        200: '#6BBFFF',
        300: '#47AFFF',
        400: '#24A0FF',
        500: '#0092FF',
        600: '#0074CC',
        700: '#005799',
        800: '#003A66',
        900: '#001D33',
      },
      "racing-red": {
        50: '#FFA3B4',
        100: '#FF8FA3',
        200: '#FF6B86',
        300: '#FF4769',
        400: '#FF244C',
        500: '#FF002E',
        600: '#CC0025',
        700: '#99001C',
        800: '#660013',
        900: '#330009',
      },
      "offroad-yellow": {
        50: '#FFF6A3',
        100: '#FFF48F',
        200: '#FFF06B',
        300: '#FFED47',
        400: '#FFE924',
        500: '#FFE600',
        600: '#CCB800',
        700: '#998A00',
        800: '#665C00',
        900: '#332E00',
      },
      "gray": {
        50: "#F0F0EF",
        100: "#E4E3E2",
        200: "#C8C6C5",
        300: "#ADAAA9",
        400: "#8F8B89",
        500: "#74706E",
        600: "#5C5857",
        700: "#474443",
        800: "#2F2D2D",
        900: "#181716"
    },},
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
        fugaz: ['Fugaz One', 'cursive'],
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
}
