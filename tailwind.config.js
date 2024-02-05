/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:"#5A5959",
        yellow:"#FFEAAE",
        orange:"#F6820C",
        purple:"#5F00D9",
        white:"#ffffff"
      }
    },
  },
  plugins: [""],
}