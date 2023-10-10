'use client';
import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
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
        { url: '/about', name: 'About' },
        { url: '/startups', name: 'Startups' },
        { url: '/contact', name: 'Contact' },
      ],
    },
    indigo: {
      label: 'Indigo',
      url: 'https://indigo.id',
      links: [
        { url: 'https://indigo.id/pre-startup', name: 'Pre-startup' },
        { url: 'https://indigo.id/incubations', name: 'Incubation' },
        { url: 'https://indigo.id/accelerations', name: 'Acceleration' },
      ],
    },
  };

  const layout = useBreakpointValue({
    base: <Footer.Base content={content} />,
    sm: <Footer.Sm content={content} />,
    md: <Footer.Md content={content} />,
  });

  return (
    <Box py={8} bg='black' color='white'>
      <Container maxW={'container.xl'}>
        <Stack gap={8}>
          <Image src={content.company.logo} alt='Indigo Game Logo' w={48} />
          {layout}
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

Footer.Base = ({ content }) => {
  return (
    <Grid templateColumns={'repeat(2, 1fr)'} gridAutoRows={'auto'} gap={4}>
      <GridItem colSpan={2}>
        <Stack>
          <Text fontSize={'sm'}>{content.company.description}</Text>
        </Stack>
        <Box h={8} />
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
        <Box h={4} />
        <Divider />
        <Box h={4} />
      </GridItem>
      <GridItem colSpan={1}>
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
      </GridItem>
      <GridItem colSpan={1}>
        <Stack>
          <Link
            as={NextLink}
            href={content.indigo.url}
            textTransform={'uppercase'}
            fontWeight={'semibold'}
            fontSize={'md'}
            isExternal
          >
            {content.indigo.label}
          </Link>
          {content.indigo.links.map((link, i) => (
            <Link
              as={NextLink}
              key={i}
              href={link.url}
              fontSize={'md'}
              isExternal
            >
              {link.name}
            </Link>
          ))}
        </Stack>
      </GridItem>
    </Grid>
  );
};

Footer.Base.displayName = 'BaseFooter';

Footer.Sm = ({ content }) => {
  return (
    <Grid templateColumns={'repeat(2, 1fr)'} gap={4}>
      <GridItem colSpan={1}>
        <Stack>
          <Text fontSize={'sm'}>{content.company.description}</Text>
        </Stack>
        <Box h={8} />
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
      </GridItem>
      <GridItem colSpan={1}>
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
        <Box h={8} />
        <Stack>
          <Link
            as={NextLink}
            href='#'
            textTransform={'uppercase'}
            fontWeight={'semibold'}
            fontSize={'md'}
            isExternal
          >
            {content.indigo.label}
          </Link>
          {content.indigo.links.map((link, i) => (
            <Link
              as={NextLink}
              key={i}
              href={link.url}
              fontSize={'md'}
              isExternal
            >
              {link.name}
            </Link>
          ))}
        </Stack>
      </GridItem>
    </Grid>
  );
};

Footer.Sm.displayName = 'SmFooter';

Footer.Md = ({ content }) => {
  return (
    <Grid templateColumns={'repeat(8, 1fr)'}>
      <GridItem colSpan={2}>
        <Stack>
          <Text fontSize={'sm'}>{content.company.description}</Text>
        </Stack>
      </GridItem>
      <GridItem colSpan={1} />
      <GridItem colSpan={1}>
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
      </GridItem>
      <GridItem colSpan={1}>
        <Stack>
          <Link
            as={NextLink}
            href='#'
            textTransform={'uppercase'}
            fontWeight={'semibold'}
            fontSize={'md'}
            isExternal
          >
            {content.indigo.label}
          </Link>
          {content.indigo.links.map((link, i) => (
            <Link
              as={NextLink}
              key={i}
              href={link.url}
              fontSize={'md'}
              isExternal
            >
              {link.name}
            </Link>
          ))}
        </Stack>
      </GridItem>
      <GridItem colSpan={1} />
      <GridItem colSpan={2}>
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
      </GridItem>
    </Grid>
  );
};

Footer.Md.displayName = 'MdFooter';

export default Footer;
