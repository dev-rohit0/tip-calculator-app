module.exports = {
  content: ["*"],
  theme: {

    screens: {
      'mobile': '375px',
      'desktop': '800px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      colors: {
        'strongcyan': 'hsl(172, 67%, 45%)',
        'verydarkcyan': 'hsl(183, 100%, 15%)',
        'darkgrayishcyan': 'hsl(186, 14%, 43%)',
        'grayishcyan': 'hsl(184, 14%, 56%)',
        'lightgrayishcyan': 'hsl(185, 41%, 84%)',
        'verylightgrayishcyan': 'hsl(189, 41%, 97%)',
        'white': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        "spaceMono":['Space Mono', 'monospace']
      },
      fontSize:{
        "input":'24px'
      }
    },
  },
  plugins: [],
}