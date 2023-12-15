/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      translate:{
        '100' : '101%'
      }
    },
    colors: {
      heading: '#13688C',
      Button: '#708ED2',
      background: '#373B69',
      card_bottom :'#EBE5E2',
      black : '#272532',
      white : '#EBE5E2'

    },
  },
  plugins: [],
}
