import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
@font-face {
  font-family: 'Pixelify Sans';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/pixelify_sans/PixelifySans-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'Pixelify Sans';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/pixelify_sans/PixelifySans-Bold.ttf') format('truetype');
        
}
@font-face {
  font-family: 'Ligo';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/ligo/Ligo.ttf') format('truetype');
}`}
  />
);

export default Fonts;
