/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Poppins","sans-serif"],
        cursive:["Pacifico","cursive"],
      },
      screens:{
        sm:"320px",
        md:"430px",
        lg:"768px",
        xl:"1024px"

      },
      colors:{
        primary:"#854d3d",
        secondary:"#4a1e1b",
        brandDark:"#270c03",
        ghostwhite:"#FFFAFF"
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"2rem",
        }
      }
    },
  },
  plugins: [],
}