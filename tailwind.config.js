/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/*.jsx",
"./src/pages/*.jsx",
"./src/components/*.jsx"
],
  theme: {
    extend: {
      colors:{
        "page-col":"#E7F0F4",
        "sidebar":"#FCF9FC",
        "item-col":"#132D46",
        "person-col":"#191E29",
        "delete":"#CD2929",
        "search-col":"#E4EEF2",
        "filter":"#25546D",
        "filter-after":"#183646",
         "settings-col":" #173857",
         "admin-bg":"#E4EEF2",
         "text-col":"#191E29",
      },
      screens: {
        'xs': '468px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

