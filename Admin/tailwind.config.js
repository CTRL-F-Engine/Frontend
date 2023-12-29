/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "page-col":"#E7F0F4",
        "sidebar":"#FCF9FC",
        "item-col":"#132D46",
        "person-col":"#191E29",
        "delete":"#CD2929",
      }
    },
  },
  plugins: [],
}

