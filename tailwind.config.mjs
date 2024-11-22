const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./app/**/*.jsx', './src/components/**/*.jsx', './src/data/components/*.mdx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#3498db',
        secondary: '#f1c40f',
        dark: '#2f3436',
        light: '#ecf0f1',
      },
      backgroundColor: {
        primary: '#3498db',
        secondary: '#f1c40f',
        dark: '#2f3436',
        light: '#ecf0f1',
      },
    },
    darkMode: 'class',
    screens: {
      sm: '640px',
      md: '768px',
      // maxMedium: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  darkMode: 'class',
  theme: {
    dark: {
      'primary-content': '#ecf0f1',
      'secondary-content': '#f1c40f',
      'base-100': '#2f3436',
      'base-200': '#333',
      'base-300': '#444',
      'base-content': '#ecf0f1',
    },
  },
}

export default tailwindConfig
