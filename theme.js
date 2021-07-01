import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        scrollBehavior: 'smooth',
      },
    },
  },
  fonts: {  
    heading: 'Montserrat, sans-serif',
    body: 'Open Sans, sans-serif',
  },
  colors: {
    saryy: '#D5A022',
    jashyl: '#044d2c',
    achykJashyl: '#269344',
    kara: '#444D4A',
    boz: '#EFF1ED',
    text: '#444D49',
    linkColor: '#3A1700',
    kok: '#00043C',
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: 'Montserrat, sans-serif',
        _focus: {
          boxShadow: 'none',
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
        _focus: {
          boxShadow: 'none',
        },
      },
    },
    Accordion: {
      baseStyle: {
        button: {
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

export default theme;
