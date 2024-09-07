/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary: "#1e3a8a",
        dark: "#111111"
      },
      container: {
        center: true,
        padding:{
          DEFAULT:"1rem",
          sm: "3rem",
        }
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

