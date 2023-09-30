'use client';
import styles from './page.module.css';
import NavigationBar from './components/nav';
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
  useToken,
} from '@chakra-ui/react';
import Logo from './components/logo';
import Fonts from './components/fonts';
import Decoration from './components/decorations';

export default function Home() {
  return (
    <>
      <VideoBackground
        src={'/video/indigo-game-hero-video.mp4'}
        wrapperProps={{ minH: '85vh' }}
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
  const content = {
    title: 'Making Indonesia a Game Producer Nation',
    subtitle:
      'Indigo Game is an incubator to level up early-stage game studio to be ready for publishing deal. Join us and bring your game into reality.',
  };

  return (
    <Box
      pos='absolute'
      top={0}
      bottom={0}
      left={0}
      right={0}
      w='full'
      bgGradient={'linear(to-r, blackAlpha.800 30%, blackAlpha.50)'}
    >
      <Container
        maxW={'container.xl'}
        centerContent
        h='full'
        w='full'
        alignItems={'flex-start'}
      >
        <Stack
          maxW={'container.md'}
          w='full'
          align={'flex-start'}
          justify={'center'}
          gap={8}
          flex={1}
        >
          <Heading fontSize='8xl' lineHeight={0.9}>
            {content.title}
          </Heading>
          <Text fontSize={'xl'}>{content.subtitle}</Text>
          <Button colorScheme={'red'} size='lg' textTransform={'uppercase'}>
            Submit your game
          </Button>
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
      <Container maxW={'container.xl'} py={48}>
        <Stack direction={['column', 'row']} gap={20}>
          <Box maxW='container.sm' py={12}>
            <TitleArea title={content.title} subtitle={content.subtitle} />
            <Box h={48} />
            <Box
              p={4}
              m={-4}
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
          </Box>
          <SimpleGrid columns={2} gap={24} pt={[0, 32]}>
            {content.benefits.map((benefit) => {
              return (
                <Stack key={benefit.id}>
                  <Box boxSize='16'>
                    <Image src={benefit.src} alt='Icon' />
                  </Box>
                  <Box as='span'>
                    <Text as='strong'>{benefit.name}</Text>
                    <Text>{benefit.description}</Text>
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
    title: 'Connecting the dots of the game development industry',
    caption:
      "We're the link that connects the dots in the game development industry, uniting talent, innovation, and opportunities to shape the future of gaming.",
    partners: [
      {
        id: 1,
        name: 'Nuon Digital Indonesia',
        logo: () => <Logo.Nuon boxSize={48} fill='white' />,
      },
      {
        id: 2,
        name: 'Bandung Techno Park',
        logo: () => (
          <Image
            src={'/logo/logo-btp-white.png'}
            boxSize={56}
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
            boxSize={56}
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
            boxSize={56}
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
            boxSize={56}
            objectFit={'contain'}
            alt={'Agate Academy'}
          />
        ),
      },
    ],
  };

  return (
    <Box py={32} pos='relative' bg='red.900'>
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
        <Stack
          direction={['column', 'row']}
          gap={12}
          align='center'
          justify={'flex-end'}
        >
          {content.partners.map((partner) => {
            const logo = partner.logo();
            return <Box key={partner.id}>{logo}</Box>;
          })}
        </Stack>
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
    <Box py={48}>
      <Container maxW={['container.xl']}>
        <Stack>
          <Stack direction={['row']} align='center' gap={8}>
            <Image src={'/icons/mentors.png'} alt='Mentor icon' boxSize={24} />

            <Box>
              <TitleArea title={content.title} subtitle={content.subtitle} />
            </Box>
          </Stack>
          <Box h={8} />
          <Stack direction={['row']} justify={'space-evenly'} gap={12}>
            <Stack direction={['column']} flex={1} gap={8}>
              <Heading size='md'>Resident Mentors</Heading>
              <Divider />
              {content.mentors.residents.map((mentor) => (
                <Stack key={mentor.id} direction={'row'} align='center' gap={8}>
                  <Avatar src={''} name={mentor.name} size='2xl' />
                  <Box>
                    <Text fontWeight={'bold'}>{mentor.name}</Text>
                    <Text fontSize={'sm'}>{mentor.role}</Text>
                  </Box>
                </Stack>
              ))}
            </Stack>
            <Stack direction={['column']} flex={1} gap={8}>
              <Heading size='md'>Technical Mentors</Heading>
              <Divider />
              {content.mentors.technicals.map((mentor) => (
                <Stack key={mentor.id} direction={'row'} align='center' gap={8}>
                  <Avatar src={''} name={mentor.name} size='2xl' />
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

  const content = {
    subtitle: 'Is your game studio',
    title: 'Eager to get publisher?',
    caption:
      'We are looking for high spirited game studio with playable vertical slice and validated business plan to be nurtured into publisher-stage. Submit your game now.',
  };

  return (
    <Box
      py={32}
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
            caption={content.caption}
          />
        </Box>
        <Box h={16} />
        <Button colorScheme='red' size={'lg'} textTransform={'uppercase'}>
          Submit your game
        </Button>
      </Container>
    </Box>
  );
};

const TitleArea = ({ title, subtitle, caption }) => {
  return (
    <>
      <Heading size='md'>{subtitle}</Heading>
      <Box h={2} />
      <Heading color='yellow.500' size='2xl'>
        {title}
      </Heading>
      <Box h={4} />
      <Text fontSize={'md'}>{caption}</Text>
    </>
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
            'object-fit': 'cover',
            height: '100%',
            width: '100%',
          }}
        />
      </Box>
      {children}
    </Box>
  );
};
