import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme:{
        colors:{
            black_100: '#212020',
            black_300: '#212020',
            black_600: '#090909',

            white_50:'#E0E0E0',
            white_100:'#F4F4F4',
            white_300:'#B8B4B4',
        },
        fontSizes: {
            sm: '1.10rem',
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '1.75rem',
          }
    },

    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',

        exsm: '(max-width: 320px)',
        sm: '(max-width: 640px)',
        md: '(max-width: 740px)',
        lg: '(max-width: 920px)',
        exlg: '(max-width: 1736px)',
      },
})