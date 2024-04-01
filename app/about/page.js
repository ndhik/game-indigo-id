'use client';

import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Image,
  LightMode,
  SimpleGrid,
  Stack,
  Step,
  StepIndicator,
  StepNumber,
  StepStatus,
  Stepper,
  Tag,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
  useToken,
} from '@chakra-ui/react';
import TitleArea from '../components/title-area';
import { useRouter } from 'next/navigation';

export default function About() {
  return (
    <>
      <HeaderSection />
      <History />
      <Container maxW={'container.xl'} py={{ base: 6, md: 12 }}>
        <Divider />
      </Container>
      <Framework />
      <JoinSection />
    </>
  );
}

const HeaderSection = () => {
  const content = {
    title: 'We are incubating Indonesian game studio since 2019',
    benefits: {
      title: '',
    },
  };

  return (
    <Box bgGradient={'linear(to-br, red.600, red.900)'}>
      <Container maxW={'container.xl'} py={24} color='white'>
        <Box maxW='container.sm'>
          <Heading size='4xl'>{content.title}</Heading>
        </Box>
      </Container>
    </Box>
  );
};

const History = () => {
  const content = {
    title: 'Indigo Game: Long Story Short',
    timeline: [
      {
        year: 2019,
        events: [
          {
            title: 'Indigo Game Launched!',
            description:
              'First batch launched with 10 game startups. 5 of them are going to funding stage.',
            imgUrl: '/2019-igsi-launch.png',
          },
        ],
      },
      {
        year: 2020,
        events: [
          {
            title: '2nd & 3rd Batch Rolling',
            description:
              'Total of 14 game startups participated, with 7 of them area going to the next stage.',
            imgUrl: '/2019-bouncing-cat.png',
          },
        ],
      },
      {
        year: 2021,
        events: [
          {
            title: '4th Batch Rolling',
            description:
              'Incubating 5 game startups with 2 of them are going to the funding stage',
            imgUrl: '/2020-igsi-1.png',
          },
          {
            title: 'First publisher deals!',
            description:
              '2 games got publishing deal with Nuon Digital Indonesia',
          },
        ],
      },
      {
        year: 2022,
        events: [
          {
            title: '5th Batch Rolling',
            description:
              '6 game startups involved and 3 are going to Alpha stage.',
            imgUrl: '/2022-batch-5.png',
          },
          {
            title: 'More Publishing Deals',
            description:
              '9 games got publishing deals with POKI, Plug in Digital, Mastiff, DreamGame, CRX, and Nuon',
            imgUrl: '/2022-igsi-google.png',
          },
        ],
      },
    ],
  };

  return (
    <Box>
      <Container maxW={'container.xl'} py={{ base: 12, md: 24 }}>
        <Heading color='yellow.500' py={12} size='xl' textAlign={'center'}>
          {content.title}
        </Heading>
        <Box h={{ base: 8, md: 12 }} />
        <Stack>
          {content.timeline.map((time) => (
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              key={time.year}
              gap={6}
              pb={12}
            >
              <Box />
              <Heading size='md' color='yellow.500'>
                {time.year}
              </Heading>
              <Wrap justify={{ base: 'flex-start', md: 'flex-end' }}>
                {time.events.map((event) =>
                  event.imgUrl ? (
                    <WrapItem key={event.title}>
                      <Image
                        src={event.imgUrl}
                        alt={event.title}
                        h={40}
                        rounded={'lg'}
                      />
                    </WrapItem>
                  ) : (
                    <></>
                  )
                )}
              </Wrap>
              <Stack gap={8}>
                {time.events.map((event) => (
                  <Box color='white' key={event.title}>
                    <Heading maxW={'sm'}>{event.title}</Heading>
                    <Box h={4} />
                    <Text fontSize={'sm'} maxW={'sm'}>
                      {event.description}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </SimpleGrid>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

const Framework = () => {
  const content = {
    title: 'Our Incubation Stages',
    stages: [
      {
        name: 'Intake',
        description:
          'At Indigo Game, we have a knack for discovering top-notch early-stage Indonesian game startups. Our approach involves a mix of canvassing and forging partnerships with various stakeholders, including local game communities, academic institutions, and game publishers.',
        activities: ['Community & academic canvassing', 'Publisher referral'],
      },
      {
        name: 'Production',
        description:
          'When a game startup reaches the point where they can join our 12-month incubation program, they get a chance to supercharge their game and sharpen their business skills, all while securing up to US$190k in funding from Indigo Game.',
        activities: [
          'Development funding',
          'Mentoring sessions',
          'Networking events',
          'Publishing support',
        ],
      },
      {
        name: 'Operational',
        description:
          "When the startup is wrapping up its incubation period and gearing up to take their game all the way to a full release with a publisher. Indigo Game will keep tabs on the startup's progress after the program, helping them connect with potential publishers down the road.",
        activities: [
          'Publishing support',
          'Alumni tracker',
          'Follow-on-funding initiatives',
        ],
      },
    ],
  };

  return (
    <Box>
      <Container maxW={'container.xl'} py={{ base: 8, md: 16 }}>
        <Heading textAlign={'center'} color='yellow.500'>
          {content.title}
        </Heading>
        <Box h={{ base: 8, md: 16 }} />
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify='space-around'
          gap={12}
        >
          {content.stages.map((stage, index) => (
            <Stack key={index} align='flex-start' color={'gray.400'}>
              <Heading color='yellow.500'>
                {index + 1}:: {stage.name}
              </Heading>
              <Text fontWeight={'normal'} fontSize={'sm'}>
                {stage.description}
              </Text>
              <Wrap>
                {stage.activities.map((activity) => (
                  <WrapItem key={activity}>
                    <Tag colorScheme='red'>{activity}</Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Stack>
          ))}
        </Stack>
      </Container>
      <Box h={{ base: 8, md: 24 }} />
    </Box>
  );
};

const JoinSection = () => {
  const [from, to] = useToken('colors', ['red.400', 'red.900']);
  const router = useRouter();

  const content = {
    subtitle: 'Is your game studio',
    title: 'Eager to get publisher?',
    caption:
      'We are looking for high spirited game studio with playable vertical slice and validated business plan to be nurtured into publisher-stage. Submit your game now.',
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
            caption={content.caption}
          />
        </Box>
        <Box h={16} />
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
      </Container>
    </Box>
  );
};
