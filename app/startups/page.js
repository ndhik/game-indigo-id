'use client';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Code,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconButton,
  Image,
  LightMode,
  Link,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  Tabs,
  Tag,
  Text,
  useToken,
} from '@chakra-ui/react';
import { useState } from 'react';
import NextLink from 'next/link';
import startups from '../mock/startups';
import { FaSteam, FaItchIo, FaGooglePlay } from 'react-icons/fa6';

export default function Startups() {
  const [filter, setFilter] = useState('all');

  return (
    <>
      <HeaderSection />
      <Box bg='gray.900'>
        <Container maxW={'container.xl'} py={12}>
          <Stack>
            <PcSection />
          </Stack>
        </Container>
      </Box>
    </>
  );
}

const HeaderSection = () => {
  return (
    <Box bgGradient={'linear(to-br, red.600, red.900)'}>
      <Container maxW={'container.xl'} py={24} color='white'>
        <Box maxW='container.sm'>
          <Heading size='4xl'>Meet our 30+ game studios</Heading>
          <Heading size='xl'>
            nurtured since 2019 from various platforms
          </Heading>
          <Box h={4} />
          <LightMode>
            <Button colorScheme={'yellow'} size='lg'>
              Reach us
            </Button>
          </LightMode>
        </Box>
      </Container>
    </Box>
  );
};

const PcSection = () => {
  let primary = [];
  let secondary = [];
  let others = [];

  startups.map((startup) => {
    const hasBanner =
      startup.games.findIndex((game) => game.banner !== undefined) >= 0;

    if (startup.active && hasBanner) {
      if (startup.funded) {
        primary = [...primary, startup];
      } else {
        secondary = [...secondary, startup];
      }
    } else {
      others = [...others, startup];
    }
  });

  return (
    <Box>
      <Container
        maxW={'container.xl'}
        color='white'
        transform={'translateY(-96px)'}
      >
        <Grid templateColumns={'repeat(4, 1fr)'} gap={8}>
          {primary.map((startup) => {
            const bannerIndex = startup.games.findIndex(
              (game) => game.banner !== undefined
            );

            return (
              <GridItem key={startup.name} colSpan={2}>
                <CardItem startup={startup} bannerIndex={bannerIndex} />
              </GridItem>
            );
          })}
          {secondary.map((startup) => {
            const bannerIndex = startup.games.findIndex(
              (game) => game.banner !== undefined
            );

            return (
              <GridItem key={startup.name} colSpan={2}>
                <CardItem startup={startup} bannerIndex={bannerIndex} />
              </GridItem>
            );
          })}
          {others.map((startup) => (
            <GridItem key={startup.name}>
              <Stack
                direction={'row'}
                gap={4}
                p={4}
                flex={1}
                rounded={'2xl'}
                overflow={'hidden'}
                bg='black'
                boxShadow={'base'}
                _hover={{ boxShadow: 'dark-lg' }}
                transition={'all 150ms ease-out'}
                align='center'
              >
                <Avatar size='md' name={startup.name} />
                <Heading size='md'>{startup.name}</Heading>
              </Stack>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const CardItem = ({ startup, bannerIndex }) => {
  return (
    <Stack
      direction={'row'}
      rounded={'2xl'}
      overflow={'hidden'}
      bg='black'
      boxShadow={'base'}
      _hover={{ boxShadow: 'dark-lg' }}
      transition={'all 150ms ease-out'}
    >
      <Stack gap={4} p={4} flex={1}>
        <Avatar size='lg' name={startup.name} />
        <Heading size='md'>{startup.name}</Heading>
      </Stack>

      <Box pos='relative'>
        <Image
          src={startup.games[bannerIndex].banner}
          alt={startup.name}
          h={56}
          objectFit={'cover'}
        />
        <Box
          pos='absolute'
          top={0}
          left={0}
          h={'full'}
          w='full'
          sx={{
            background: `radial-gradient(circle at top right, transparent 30%, black 80%)`,
          }}
        />
        <Stack direction={'row'} pos='absolute' p={2} bottom={0} right={0}>
          {startup.games[bannerIndex].steamUrl && (
            <Link
              as={NextLink}
              href={startup.games[bannerIndex].steamUrl}
              target='_blank'
            >
              <Icon as={FaSteam} boxSize={6} />
            </Link>
          )}
          {startup.games[bannerIndex].playUrl && (
            <Link
              as={NextLink}
              href={startup.games[bannerIndex].playUrl}
              target='_blank'
            >
              <Icon as={FaGooglePlay} boxSize={6} />
            </Link>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};
