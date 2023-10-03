import './globals.css';
import { Providers } from './providers';
import NavigationBar from './components/nav';
import Footer from './components/footer';
import { DarkMode } from '@chakra-ui/react';

export const metadata = {
  title: 'Indigo Game',
  description: 'Game studio incubation program by Telkom Indonesia',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <NavigationBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
