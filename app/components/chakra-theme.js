import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Pixelify Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    red: {
      50: '#F8C1C7',
      100: '#F39DA5',
      200: '#EF798C',
      300: '#EB5573',
      400: '#E7325A',
      500: '#E71C34',
      600: '#D3182E',
      700: '#BC1428',
      800: '#960F22',
      900: '#700B1C',
    },
    purple: {
      50: '#BAA5D6',
      100: '#A58BD0',
      200: '#8B70C9',
      300: '#7156C3',
      400: '#573CCD',
      500: '#8B3FBC',
      600: '#4F23B6',
      700: '#3E1E94',
      800: '#2E1962',
      900: '#1E132F',
    },
    cyan: {
      50: '#99EDED',
      100: '#7EE6E6',
      200: '#63DEDE',
      300: '#49D6D6',
      400: '#2ECFCF',
      500: '#00CED1',
      600: '#00ACAF',
      700: '#0089A3',
      800: '#00668C',
      900: '#004477',
    },
    yellow: {
      50: '#F9F290',
      100: '#F7EC58',
      200: '#F5E520',
      300: '#F3E000',
      400: '#F2D100',
      500: '#F2A900',
      600: '#E28600',
      700: '#C26800',
      800: '#A25000',
      900: '#833600',
    },
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: 'lg',
      },
    },
  },
});

export default theme;
