/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf6f2',
          100: '#f3ebe4',
          200: '#e7d9cf',
          300: '#d6c0b3',
          400: '#bf9f92',
          500: '#a07e78',
          600: '#85636a',
          700: '#6e4f5a',
          800: '#5a3f4a',
          900: '#432f38',
          950: '#2e2027',
        },
        ink: { DEFAULT: '#2e2027', soft: '#5a3f4a', mute: '#8c7a78' },
        lilac: { light: '#ece4ef', DEFAULT: '#c6b7cf', dark: '#835a8f' },
        champagne: { DEFAULT: '#C6A15B', light: '#EEDFBF', dark: '#9A7433' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
