/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#071615',
        cardbg: 'rgba(15, 37, 35, 0.7)',
        accent: '#5eead4',
        darkaccent: '#0d2d2a',
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
