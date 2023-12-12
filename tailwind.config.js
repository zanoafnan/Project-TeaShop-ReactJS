/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brightColor: "#afbd9f",
        backgroundColor: "#8b997f",
      },
      backgroundImage: {
        'home': "url('/src/assets/img/hometea.jpg')",
        'about': "url('/src/assets/img/aboutbg.jpg')",
      }
    },
  },
  plugins: [],
}

