import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    textDecoration: 'none',
    marker:'none',
  },

  'ul,li':{
    marker:'none',
    textDecoration: 'none',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },


  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$black_600',
    color: '$white_300',
    textDecoration: 'none',
    marker:'none',
  },


  'body, input, textarea, button': {
    fontFamily: 'Kanit',
    fontWeight: 400
  }
})