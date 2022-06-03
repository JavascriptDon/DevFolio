module.exports = {
  content: ["./src/**/*.{html,js,svelte}"],  theme: {
  extend: {  fontFamily: {
    'poppins': ["'Montserrat'", 'sans-serif']
  },},
},
plugins: [require("daisyui")],
}