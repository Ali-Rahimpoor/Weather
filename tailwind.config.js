/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [  "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        "Dana":"Dana",
        "Dana-Regular":"Dana-Regular",
        "Dana-Bold":"Dana-Bold",
        "Morabba":"Morabba",
        "Morabba-Light":"Morabba-Light",
        "Morabba-Bold":"Morabba-Bold",
        "IranMarker":"IranMarker"
      },
      container:{
        center:true
      },
      screens:{
        "xs":"440px"
      }
    },
  },
  plugins: [
    function({ addVariant }){
      addVariant('child','& > *');
      addVariant('child-hover','& > *:hover');
    }
  ],
}

