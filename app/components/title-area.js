import { Box, Heading, Text } from '@chakra-ui/react';

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

export default TitleArea;
