'use client';

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
          <Fonts />
          <Analytics />
          {children}
        </DarkMode>
      </ChakraProvider>
    </CacheProvider>
  );
}
