/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-1000': '#29292E'
      },
      fontSize: {
        '10xl': '160px'
      },
      fontFamily: {
        'RobotoMono': 'Roboto Mono'
      }
    },
  },
  plugins: [],
}

