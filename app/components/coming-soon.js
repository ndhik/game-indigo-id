import { Box, Container, Heading } from '@chakra-ui/react';

const ComingSoon = () => {
  return (
    <Box bg='gray.800' py={24} minH={'50vh'}>
      <Container maxW={'container.xl'} centerContent>
        <Heading textAlign={'center'} size={'4xl'} color='gray.400'>
          This DLC will be coming soon!
        </Heading>
      </Container>
    </Box>
  );
};

export default ComingSoon;
