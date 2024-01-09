import { styled } from '..';
import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export const Container = styled('div',{
    zIndex: 20,
    position: 'relative',
    
    header:{
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',

        paddingTop: '10px',
        marginBottom:'50px',

        maxWidth: '100vw',
        width: '100%',
    }

});

export const NaviRoot = styled(NavigationMenu.Root, {   

    '@sm':{
        display: 'none'
    },

    zIndex:'10',
});

export const NaviList = styled(NavigationMenu.List, {
    display:'flex',
    flexDirection: 'row',
    textDecoration: 'none',

    position: 'absolute',
    right: '10px',

});

export const LinkStyling = styled(Link,{
    color: '$white_50'
})

export const NaviTrigger = styled(NavigationMenu.Trigger,{
    width: 140,
    height: 60,
    padding:1,
  
    borderRadius:6,
    border: 'none',

    cursor: 'pointer',
    color: '$white_100',
    backgroundColor: '$black_600',

    fontSize: '$xl',
    fontWeight: '500',

    '@md':{ 
        fontSize: '$sm',

        width: 100,
        height: 40,
    },
    
    '&:hover':{
        backgroundColor: '$black_300',
        fontWeight: '900',
        fontSize: '$2xl',
        textDecoration: 'underline',
        textUnderlineOffset: 5,

        '@md':{
            backgroundColor: '$black_300',
            fontWeight: '500',
            fontSize: '$lg',
            textDecoration: 'underline',
            textUnderlineOffset: 5,
        }

    },

    '&:focus':{
        backgroundColor: '$black_300',
        fontWeight: '900',
        fontSize: '$2xl',
        textDecoration: 'underline',
        textUnderlineOffset: 5,

        '@md':{
            backgroundColor: '$black_300',
            fontWeight: '500',
            fontSize: '$lg',
            textDecoration: 'underline',
            textUnderlineOffset: 5,
        }
    },

   
});

export const NaviContent = styled(NavigationMenu.Content,{
   ul:{
        backgroundColor: '$black_600',
        borderRadius: '6px',
   },
    li:{
        color:'$white_300',
        height: 45,
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        marginBottom:5,
        paddingTop:5,
        paddingBottom:5,
        
        fontSize: '$md',    
        cursor: 'pointer',

        borderRadius: 6,
   
        '@md':{ 
            fontSize: '$sm',
        
            width: 100,
            height: 35,
            },

        '&:hover':{
            backgroundColor: '$black_300',

            color: '$white_50', 
            fontSize: '$xl',
            fontWeight: '600',

            '@md':{
                height: 40,

                backgroundColor: '$black_300',
                color: '$white_50',
                fontWeight: '500',
                fontSize: '$lg',
            }

            
        },

        
   }
    
});