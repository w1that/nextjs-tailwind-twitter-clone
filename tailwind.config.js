module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          twitter: '#d9d9d9',
          hover:'#031018',
          text:'#676F76'
        },
        twitterblue:{
          default:'#1D9BF0',
          hover:"#1A8CD8",
          inactive:'#0E4D77'
        },
        buttons:{
          commentHover:'#0A171F',
          retweetHover:'#071A14',
          likeHover:'#200914',
        },
        menuItem:{
          hover:'#161616'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
