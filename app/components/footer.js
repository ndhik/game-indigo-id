import {
  Box,
  Container,
  Divider,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const Footer = () => {
  const content = {
    company: {
      logo: '/logo/logo-indigo-game-white.png',
      name: 'Indigo Game',
      description:
        'Indigo Game is an incubation program under Telkom Indonesia who serves early stage game studio to bring the game into reality and going global faster.',
      address: [
        'Direktorat Digital Business',
        'Telkom Landmark Tower',
        'Jakarta Digital Valley Lantai 38',
        'Jalan Jenderal Gatot Subroto, Kav-52',
        'Jakarta, Indonesia',
      ],
      email: 'game@indigo.id',
    },
    indigoGame: {
      label: 'Indigo Game',
      url: '#',
      links: [
        { url: '#', name: 'About' },
        { url: '#', name: 'Portfolio' },
        { url: '#', name: 'Partners' },
        { url: '#', name: 'Articles' },
      ],
    },
    indigo: {
      label: 'Indigo',
      url: 'https://indigo.id',
      links: [
        { url: '#', name: 'Pre-startup' },
        { url: '#', name: 'Incubation' },
        { url: '#', name: 'Acceleration' },
      ],
    },
  };

  return (
    <Box py={8}>
      <Container maxW={'container.xl'}>
        <Stack gap={8}>
          <Image src={content.company.logo} alt='Indigo Game Logo' w={48} />
          <SimpleGrid columns={[1, 4]} gap={8}>
            <Stack>
              <Text fontSize={'sm'}>{content.company.description}</Text>
            </Stack>
            <Stack>
              <Image src={'/icons/map-marker.png'} boxSize={8} alt='location' />
              <Text fontSize={'sm'} whiteSpace={'pre-line'}>
                {content.company.address.map((line) => line + '\n')}
              </Text>
              <Image src={'/icons/mail.png'} boxSize={6} alt='mail' />
              <Link
                as={NextLink}
                href={`mailto:${content.company.email}`}
                fontSize={'md'}
              >
                {content.company.email}
              </Link>
            </Stack>
            <Stack>
              <Link
                as={NextLink}
                href='#'
                textTransform={'uppercase'}
                fontWeight={'semibold'}
                fontSize={'md'}
              >
                {content.indigoGame.label}
              </Link>
              {content.indigoGame.links.map((link, i) => (
                <Link as={NextLink} key={i} href={link.url} fontSize={'md'}>
                  {link.name}
                </Link>
              ))}
            </Stack>
            <Stack>
              <Link
                as={NextLink}
                href='#'
                textTransform={'uppercase'}
                fontWeight={'semibold'}
                fontSize={'md'}
              >
                {content.indigo.label}
              </Link>
              {content.indigo.links.map((link, i) => (
                <Link as={NextLink} key={i} href={link.url} fontSize={'md'}>
                  {link.name}
                </Link>
              ))}
            </Stack>
          </SimpleGrid>
          <Divider borderColor={'red.500'} borderWidth={4} />
          <Text fontSize={'sm'}>
            &copy; {new Date().getFullYear()} {content.company.name} &ndash; PT.
            Telkom Indonesia
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
