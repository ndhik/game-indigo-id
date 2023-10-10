'use client';

// Supports weights 400-700
import '@fontsource-variable/pixelify-sans';
// Supports weights 100-900
import '@fontsource-variable/raleway';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, DarkMode } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import theme from './components/chakra-theme';
import Fonts from './components/fonts';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <DarkMode>
          <Analytics />
          {children}
        </DarkMode>
      </ChakraProvider>
    </CacheProvider>
  );
}
