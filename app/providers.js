'use client';

// Supports weights 100-900
import '@fontsource-variable/raleway';
import '@fontsource/silkscreen';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, DarkMode } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import theme from './components/chakra-theme';

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
