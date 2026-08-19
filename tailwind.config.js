/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          deep: '#163A2D',
          DEFAULT: '#24513F',
          dark: '#112D23',
          light: '#2E6650',
        },
        sage: {
          DEFAULT: '#78966F',
          light: '#A1B79A',
          dark: '#587350',
        },
        sand: {
          DEFAULT: '#E8DDC8',
          light: '#F3EDDF',
          dark: '#D4C4A8',
        },
        offwhite: '#F7F5EF',
        charcoal: '#202724',
        gold: {
          DEFAULT: '#C6A15B',
          light: '#D9B978',
          dark: '#A3813E',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'organic': '0 10px 30px -10px rgba(22, 58, 45, 0.08)',
        'organic-hover': '0 20px 40px -15px rgba(22, 58, 45, 0.15)',
        'premium': '0 4px 20px -2px rgba(32, 39, 36, 0.06), 0 2px 6px -1px rgba(32, 39, 36, 0.04)',
      }
    },
  },
  plugins: [],
}
