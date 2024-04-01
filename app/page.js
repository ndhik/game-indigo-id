'use client';
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  DarkMode,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Image,
  LightMode,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
  useToken,
} from '@chakra-ui/react';
import Logo from './components/logo';
import Decoration from './components/decorations';
import { useRouter } from 'next/navigation';
import TitleArea from './components/title-area';

export default function Home() {
  return (
    <>
      <VideoBackground
        src={'/video/indigo-game-hero-video.mp4'}
        wrapperProps={{ h: '85vh', minH: 'container.sm' }}
      >
        <HeroSection />
      </VideoBackground>
      <ProgramSection />
      <EngagementSection />
      <MentorSection />
      <JoinSection />
    </>
  );
}

const HeroSection = () => {
  const router = useRouter();
  const content = {
    title: 'Indigo Game intake is open!',
    subtitle:
      'You can submit your game anytime around the year to be incubated in Indigo Game Incubation Program. Just hit button below and fill the form, attach your deck and game build, and wait for our call!',
  };

  const onCtaClick = () => {
    router.push('https://bit.ly/teams_registration_indigo');
  };

  return (
    <Box
      pos='absolute'
      top={0}
      bottom={0}
      left={0}
      right={0}
      w='full'
      bgGradient={[
        'linear(to-b, blackAlpha.600, blackAlpha.600)',
        'linear(to-tr, blackAlpha.800 30%, blackAlpha.50)',
      ]}
      textColor={'white'}
    >
      <Container
        maxW={'container.xl'}
        centerContent
        h='full'
        w='full'
        alignItems={{ base: 'center', md: 'flex-start' }}
      >
        <Stack
          maxW={'container.md'}
          w='full'
          align={{ base: 'center', md: 'flex-start' }}
          justify={'center'}
          gap={8}
          flex={1}
        >
          <Heading
            fontSize={{ base: '6xl', md: '8xl' }}
            lineHeight={1.1}
            textAlign={{ base: 'center', md: 'start' }}
          >
            <Highlight
              query={'intake is open!'}
              styles={{ rounded: 'md', p: 0, bg: 'orange.300' }}
            >
              {content.title}
            </Highlight>
          </Heading>
          <Text fontSize={'lg'} textAlign={{ base: 'center', md: 'start' }}>
            {content.subtitle}
          </Text>
          <LightMode>
            <Button
              colorScheme='red'
              size={'lg'}
              textTransform={'uppercase'}
              onClick={onCtaClick}
            >
              Submit your game
            </Button>
          </LightMode>
        </Stack>
      </Container>
    </Box>
  );
};

const ProgramSection = () => {
  const content = {
    subtitle: 'We provide',
    title: 'Supports to level up your game studio',
    stats: [
      { label: 'startups', value: '30+' },
      { label: 'funding delivered', value: 'US$600K+' },
      { label: 'publisher deals', value: '9' },
      { label: 'event participated', value: '10+' },
    ],
    benefits: [
      {
        id: 1,
        name: 'Development fund',
        description: 'to back your game development cost with less risk',
        src: '/icons/investment.png',
      },
      {
        id: 2,
        name: 'Dedicated mentor',
        description:
          'to shape your founder mindset and be ready for the next level',
        src: '/icons/chat-balloon.png',
      },
      {
        id: 3,
        name: 'Technical mentor',
        description:
          'to guide your development progress to be technically pretty',
        src: '/icons/vector.png',
      },
      {
        id: 4,
        name: 'Publishing support',
        description: 'to assist you on handling publishing deals',
        src: '/icons/customer.png',
      },
      {
        id: 5,
        name: 'Networking events',
        description:
          'as marketing channel to bring your game into national and global stage',
        src: '/icons/stereo.png',
      },
      {
        id: 6,
        name: 'Facility support',
        description: 'with gaming PCs you can utilize during development phase',
        src: '/icons/lights.png',
      },
    ],
  };

  return (
    <Box bg='red.800' pos='relative' overflow={'hidden'}>
      <Decoration.ArrowHero
        pos='absolute'
        top={-60}
        right={-60}
        boxSize={'6xl'}
        transform={'scaleX(-1) rotate(160deg)'}
      />
      <Container
        maxW={'container.xl'}
        py={{ base: 8, md: 40 }}
        textColor={'white'}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 8, md: 20 }}
        >
          <Stack
            maxW='container.sm'
            direction={{ base: 'column-reverse', md: 'column' }}
            py={{ base: 0, md: 12 }}
          >
            <Box>
              <TitleArea title={content.title} subtitle={content.subtitle} />
            </Box>
            <Box h={{ base: 12, md: 48 }} />
            <Box
              p={4}
              m={{ base: 1, md: 0, xl: -4 }}
              bg='red.900'
              borderRadius={'2xl'}
              boxShadow={'2xl'}
            >
              <Heading size='md'>Indigo Game by Numbers</Heading>
              <Box h={4} />
              <Stack>
                {content.stats.map((stat, index) => (
                  <Text as='span' key={index}>
                    <Heading color='yellow.500' display={'inline'}>
                      {stat.value}
                    </Heading>{' '}
                    {stat.label}
                  </Text>
                ))}
              </Stack>
            </Box>
          </Stack>
          <SimpleGrid
            columns={2}
            gap={{ base: 8, md: 24 }}
            pt={{ base: 0, md: 32 }}
          >
            {content.benefits.map((benefit) => {
              return (
                <Stack key={benefit.id}>
                  <Box boxSize='16'>
                    <Image src={benefit.src} alt='Icon' />
                  </Box>
                  <Box as='span'>
                    <Text as='strong'>{benefit.name}</Text>
                    <Text fontSize={{ base: 'md', md: 'lg' }}>
                      {benefit.description}
                    </Text>
                  </Box>
                </Stack>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

const EngagementSection = () => {
  const content = {
    subtitle: 'We are',
    title: 'Making Indonesia a Game Producer Nation',
    caption:
      "We're the link that connects the dots in the game development industry, uniting talent, innovation, and opportunities to shape the future of gaming.",
    partners: [
      {
        id: 1,
        name: 'Nuon Digital Indonesia',
        logo: () => (
          <Logo.Nuon width={{ base: 24, md: 32 }} h='auto' fill='white' />
        ),
      },
      {
        id: 2,
        name: 'Bandung Techno Park',
        logo: () => (
          <Image
            src={'/logo/logo-btp-white.png'}
            width={{ base: 32, md: 40 }}
            h='auto'
            objectFit={'contain'}
            alt={'Bandung Techno Park'}
          />
        ),
      },
      {
        id: 3,
        name: 'The Iterative Collective',
        logo: () => (
          <Image
            src={'/logo/logo-tic.webp'}
            width={{ base: 32, md: 40 }}
            h='auto'
            objectFit={'contain'}
            alt={'The Iterative Collective'}
          />
        ),
      },
      {
        id: 4,
        name: 'GameLan Jogja',
        logo: () => (
          <Image
            src={'/logo/logo-gamelan-game-jogja.png'}
            width={{ base: 32, md: 40 }}
            h='auto'
            objectFit={'contain'}
            alt={'GameLan Jogja'}
          />
        ),
      },
      {
        id: 5,
        name: 'Agate Academy',
        logo: () => (
          <Image
            src={
              'https://academy.agate.id/wp-content/uploads/2023/05/logo-agate-academy-white-1.png'
            }
            width={{ base: 32, md: 40 }}
            h='auto'
            objectFit={'contain'}
            alt={'Agate Academy'}
          />
        ),
      },
      {
        id: 6,
        name: 'IA-CEPA Katalis',
        logo: () => (
          <Image
            src={
              'https://iacepa-katalis.org/wp-content/uploads/2022/02/logo_white-72.png'
            }
            width={{ base: 32, md: 40 }}
            h='auto'
            objectFit={'contain'}
            alt='IA-CEPA Katalis'
          />
        ),
      },
    ],
  };

  return (
    <Box py={[24, 32]} pos='relative' bg='red.900' textColor={'white'}>
      <Decoration.ArrowHero
        pos='absolute'
        boxSize={'7xl'}
        color={'red.500'}
        transform={'scaleX(-1) rotate(-15deg)'}
        top={200}
        left={-500}
      />
      <Container maxW={'container.xl'} centerContent>
        <Box maxW={'container.sm'} textAlign={'center'}>
          <TitleArea
            title={content.title}
            subtitle={content.subtitle}
            caption={content.caption}
          />
        </Box>
        <Box h={8} />
        <Wrap justify={'center'} align='center' spacingX={{ base: 8, md: 18 }}>
          {content.partners.map((partner) => {
            const logo = partner.logo();
            return <WrapItem key={partner.id}>{logo}</WrapItem>;
          })}
        </Wrap>
      </Container>
    </Box>
  );
};

const MentorSection = () => {
  const content = {
    subtitle: 'Level up your game with',
    title: 'Guidance from the experts',
    mentors: {
      residents: [
        {
          id: 1,
          name: 'Rachmad Imron',
          role: 'CEO Digital Happiness',
          linkedInUrl: '',
          companyUrl: '',
          imageUrl: '',
        },
        {
          id: 2,
          name: 'Riris Marpaung',
          role: 'CEO GameChanger Studio',
          linkedInUrl: '',
          companyUrl: '',
          imageUrl: '',
        },
        {
          id: 3,
          name: 'Dominikus Damas Putranto',
          role: 'Co-founder & Director of People and Culture Rolling Glory',
          linkedInUrl: '',
          companyUrl: '',
          imageUrl: '',
        },
      ],
      technicals: [
        {
          id: 4,
          name: 'Wimindra Lee',
          role: 'Creative Director Agate',
          linkedInUrl: '',
          companyUrl: '',
          imageUrl: '',
        },
        {
          id: 5,
          name: 'Rizky Wasisto Edi',
          role: 'Senior 2d Artist',
          linkedInUrl: '',
          companyUrl: '',
          imageUrl: '',
        },
        {
          id: 6,
          name: 'Yoseph Budianto',
          role: 'ex-CTO Aftermyth Studio',
          linkedInUrl: '',
          companyUrl: '',
          imageUrl: '',
        },
      ],
    },
  };

  return (
    <Box py={{ base: 16, md: 48 }} bg='gray.900' color='white'>
      <Container maxW={['container.xl']}>
        <Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            align={'center'}
            gap={8}
          >
            <Image src={'/icons/mentors.png'} alt='Mentor icon' boxSize={24} />
            <Box textAlign={{ base: 'center', md: 'start' }}>
              <TitleArea title={content.title} subtitle={content.subtitle} />
            </Box>
          </Stack>
          <Box h={8} />
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify={'space-evenly'}
            gap={12}
          >
            <Stack direction={['column']} flex={1} gap={{ base: 4, md: 8 }}>
              <Heading size='md'>Resident Mentors</Heading>
              <Divider borderColor={'white'} />
              {content.mentors.residents.map((mentor) => (
                <Stack key={mentor.id} direction={'row'} align='center' gap={8}>
                  <Avatar
                    src={''}
                    name={mentor.name}
                    size={{ base: 'xl', sm: '2xl' }}
                  />
                  <Box>
                    <Text fontWeight={'bold'}>{mentor.name}</Text>
                    <Text fontSize={'sm'}>{mentor.role}</Text>
                  </Box>
                </Stack>
              ))}
            </Stack>
            <Stack direction={['column']} flex={1} gap={{ base: 4, md: 8 }}>
              <Heading size='md'>Technical Mentors</Heading>
              <Divider borderColor={'white'} />
              {content.mentors.technicals.map((mentor) => (
                <Stack key={mentor.id} direction={'row'} align='center' gap={8}>
                  <Avatar
                    src={''}
                    name={mentor.name}
                    size={{ base: 'xl', sm: '2xl' }}
                  />
                  <Box>
                    <Text fontWeight={'bold'}>{mentor.name}</Text>
                    <Text fontSize={'sm'}>{mentor.role}</Text>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

const JoinSection = () => {
  const [from, to] = useToken('colors', ['red.400', 'red.900']);
  const router = useRouter();

  const content = {
    subtitle: 'Is your game studio',
    title: 'Eager to get publisher?',
    caption: [
      'We are looking for high spirited game studio with playable vertical slice and validated business plan to be nurtured into publisher-stage. Submit your game now.',
      'Indigo Game intake is always open 24/7.',
    ],
  };

  const onCtaClick = () => {
    router.push('https://bit.ly/teams_registration_indigo');
  };

  return (
    <Box
      color='white'
      py={{ base: '48', md: 32 }}
      sx={{
        background: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 60%, black), url('/2023-alpha-hero-bg.png') center / cover`,
      }}
      pos='relative'
    >
      <Container maxW={'container.xl'} centerContent>
        <Box maxW={'container.sm'} textAlign={'center'}>
          <TitleArea
            title={content.title}
            subtitle={content.subtitle}
            caption={content.caption[0]}
          />
        </Box>
        <Box h={12} />
        <Stack direction={'row'}>
          <LightMode>
            <Tooltip
              hasArrow
              label={'Indigo Game intake is always open 24/7'}
              bg={'orange.300'}
              color='black'
              fontWeight={'bold'}
              isOpen
              placement={'top'}
            >
              <Button
                colorScheme='red'
                size={'lg'}
                textTransform={'uppercase'}
                onClick={onCtaClick}
              >
                Submit your game
              </Button>
            </Tooltip>
          </LightMode>
        </Stack>
      </Container>
    </Box>
  );
};

const VideoBackground = ({ src, wrapperProps, children }) => {
  return (
    <Box pos={'relative'} {...wrapperProps}>
      <Box pos={'absolute'} zIndex={-1} top={0} left={0} right={0} bottom={0}>
        <video
          autoPlay
          loop
          muted
          playsInline
          src={src}
          type={'video/mp4'}
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
          }}
        />
      </Box>
      {children}
    </Box>
  );
};
