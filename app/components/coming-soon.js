import { Box, Container, Heading } from '@chakra-ui/react';

const ComingSoon = () => {
  return (
    <Box bg='gray.600' py={24}>
      <Container maxW={'container.xl'}>
        <Heading textAlign={'center'} size={'4xl'} color='gray.400'>
          This DLC will be coming soon!
        </Heading>
      </Container>
    </Box>
  );
};

export default ComingSoon;
