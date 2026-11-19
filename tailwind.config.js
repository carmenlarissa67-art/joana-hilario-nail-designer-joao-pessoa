/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8f5fa',
          100: '#f0e9f4',
          200: '#e2d5ea',
          300: '#c8b6d6',
          400: '#a98fbe',
          500: '#8a6ca2',
          600: '#715389',
          700: '#5c4171',
          800: '#4a3260',
          900: '#36254a',
          950: '#221830',
        },
        ink: { DEFAULT: '#221830', soft: '#4a3260', mute: '#857a90' },
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
