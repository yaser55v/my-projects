module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Ubuntu']
      },
      colors: {
        bgLight: '#f5cca3',
        bgdark: '#dba469 ',
        bgProject: '#d6985b',
        facebook: '#3b5998',
        linkedin: '#0e76a8',
        twitter: '#00acee',
        github: '#6e5494',
        upwork: '#6fda44'
      },
      animation: {
        'move-light': 'light 10s linear'
      },
     
      dropShadow: {
        'lamp': '10px 20px 50px rgb(255, 174, 25)'
      },
      height: {
        exh: "30rem"
      },
      width: {
        'fit-content': 'fit-content'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['active'],
      transitionDuration: ['active'],
    },
  },
  plugins: [],
}