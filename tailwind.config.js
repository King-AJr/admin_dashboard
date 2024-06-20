/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        jarkata: ['Plus Jakarta Sans']
      },
      colors: {
        mygrey: '#EDEDED',
        myRed: '#EB2930'
      }
    },
  },
  plugins: [],
}