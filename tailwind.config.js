/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/*.jsx",
"./src/pages/*.jsx",
"./src/components/*.jsx"
],
  theme: {
    extend: {

      screens: {
        'xs': '468px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

