'use client';

import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  IconButton,
  Image,
  Link,
  Stack,
  Tooltip,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

import { TbMenu2, TbX } from 'react-icons/tb';

const NavigationBar = () => {
  const isDesktop = useBreakpointValue(
    {
      base: false,
      md: true,
    },
    { ssr: true }
  );

  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = [
    { id: 1, href: '/about', label: 'About' },
    { id: 2, href: '/startups', label: 'Startups' },
    { id: 3, href: '/contact', label: 'Contact' },
  ];

  const onCtaClick = () => {
    router.push('https://bit.ly/teams_registration_indigo');
  };

  return (
    <>
      <Box
        color='white'
        bgGradient={'linear(to-br, red.500, red.600 , red.600 ,  red.800)'}
      >
        <Container maxW={'container.xl'}>
          <Stack
            direction={['row']}
            justify='space-between'
            h={16}
            align='center'
          >
            <Stack direction={['row']}>
              <Link as={NextLink} href='/'>
                <Image
                  src={'/logo/logo-indigo-game-white.png'}
                  width={40}
                  alt='Indigo Game Logo'
                  height='auto'
                />
              </Link>
            </Stack>
            <Box flex={1} />
            {isDesktop ? (
              <Stack direction={['row']} align='baseline' gap={8}>
                {links.map((link) => (
                  <Link as={NextLink} key={link.id} href={link.href}>
                    {link.label}
                  </Link>
                ))}
                <Tooltip
                  hasArrow
                  label={'Indigo Game intake is open'}
                  bg={'gray.100'}
                  fontSize={'md'}
                  color={'red.400'}
                  fontWeight={'bold'}
                  isOpen
                  placement={'bottom'}
                  borderRadius={'md'}
                  px={5}
                  py={1}
                >
                  <Button
                    colorScheme='yellow'
                    boxShadow={'lg'}
                    size='sm'
                    onClick={onCtaClick}
                  >
                    Submit your game
                  </Button>
                </Tooltip>
              </Stack>
            ) : (
              <IconButton
                icon={isOpen ? <TbX /> : <TbMenu2 />}
                variant='ghost'
                textColor={'white'}
                _hover={{
                  bg: 'red.800',
                }}
                onClick={isOpen ? onClose : onOpen}
              />
            )}
          </Stack>
        </Container>
      </Box>
      <Drawer isOpen={isOpen} placement='top' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg='black' borderBottomRadius={'xl'} overflow={'hidden'}>
          <DrawerCloseButton color='white' />
          <DrawerBody color='white'>
            <Stack>
              <Image
                src='/logo/logo-indigo-game-red.png'
                alt='Logo Indigo Game'
                width={40}
                objectFit={'contain'}
                h='auto'
              />
              {links.map((link) => (
                <Link
                  as={NextLink}
                  key={link.id}
                  href={link.href}
                  fontSize={'xl'}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                colorScheme='yellow'
                boxShadow={'lg'}
                size='md'
                onClick={onCtaClick}
              >
                Submit your game
              </Button>
            </Stack>
          </DrawerBody>
          <DrawerFooter bg='black' />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavigationBar;
