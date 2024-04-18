/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#050027",
        'inactive': "#4D4D4D",
        'accent': "#53C1FF",
        'white': "#EBEDF0",
        'light': "#A8A8A8",
      },
      fontFamily: {
        'sans': "Lato",
        'mono': "Space Mono",
      }
    },
  },
  plugins: [],
}