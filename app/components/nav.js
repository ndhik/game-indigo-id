import { Box, Button, Container, Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';

const NavigationBar = () => {
  return (
    <Box bg='red.600' px={[4, 8]}>
      <Container maxW={'container.xl'}>
        <Stack
          direction={['row']}
          justify='space-between'
          bg='red.600'
          h={16}
          align='center'
        >
          <Stack direction={['row']}>
            <Box>
              <Image
                src={'/logo/logo-indigo-game-white.png'}
                width={128}
                alt='Indigo Game Logo'
                height={36}
              />
            </Box>
          </Stack>
          <Box flex={1} />
          <Stack direction={['row']} align='baseline' gap={8}>
            <Link as={NextLink} href='#'>
              About
            </Link>
            <Link as={NextLink} href='#'>
              Portfolios
            </Link>
            <Link as={NextLink} href='#'>
              Get in touch
            </Link>
            <Button colorScheme='yellow' boxShadow={'lg'} size='sm'>
              Submit your game
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default NavigationBar;
