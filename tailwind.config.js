/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}"],
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

