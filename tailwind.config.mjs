const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./app/**/*.jsx', './src/components/**/*.jsx', './src/data/components/*.mdx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
    },
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
}

export default tailwindConfig
