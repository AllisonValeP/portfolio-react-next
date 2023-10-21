import { keyframes } from '@stitches/react';
import { styled } from '..';


export const HomeContaier = styled('main',{
    display: 'flex',
    width: '100%',
//   maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
//   marginLeft: 'auto',
//   minHeight: 656
   
});


export const ImageContainer = styled('div',{
   
    position: 'relative',
  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  
    img:{
      
        objectFit: 'cover',
        cursor: 'pointer',
        
    },

    footer:{
        position: 'absolute',
        bottom: '1.5rem',
        padding: '0.3rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: '$white_300',

       transform: 'translateY(100%)',
       opacity: 0,
       transition: 'all 0.2s ease-in-out',

        '&:hover':{
            fontSize: '$md',
            color: '$white_50',
        },
    },

    '&:hover': {
        footer: {
          transform: 'translateY(-30%)',
          opacity: 1
        }
      },

});