/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#121113',
        cardbg: 'rgba(28, 26, 30, 0.75)',
        accent: '#b8866d',
        darkaccent: '#2f2724',
        teal: {
          50: '#fffbf7',
          100: '#fef1e6',
          200: '#fbe2cc',
          300: '#f5c6a3',
          400: '#b8866d',
          500: '#9b6d57',
          600: '#865642',
          700: '#704231',
          800: '#5c3527',
          900: '#4c2b20',
          950: '#2c2320',
        },
        emerald: {
          50: '#fffbf0',
          100: '#fff6db',
          200: '#feebb7',
          300: '#fdda88',
          400: '#f4ebe1',
          500: '#e7d5c5',
          600: '#d7bcab',
          700: '#bc9c8a',
          800: '#9c7b69',
          900: '#7f6353',
          950: '#221b19',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
