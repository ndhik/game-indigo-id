'use client';

import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
  Code,
  useToast,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

export default function Contact() {
  const router = useRouter();
  const toast = useToast();

  const initialValues = {
    name: '',
    message: '',
    email: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Your name is required'),
    message: Yup.string().required('Please enter your message'),
    email: Yup.string().email().required('Your email is required'),
  });

  const onSubmit = async (values, actions) => {
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      toast({
        title: 'Your message is submmited',
        status: 'success',
      });
      router.push('/');
    } catch (error) {
      toast({
        title: "Oops, something's wrong happening",
        status: 'error',
      });
    }
  };

  return (
    <Box py={24} bg='gray.600' textColor={'white'}>
      <Container maxW={'container.xl'}>
        <Stack direction={{ base: 'column', md: 'row' }} gap={24}>
          <Box flex={1}>
            <Heading color='yellow.500'>Let&apos;s engage!</Heading>
            <Box h={8} />
            <Text>
              Tell us what we can collaborate together.
              <br />
              If you are a game studio looking for incubation program, you can
              go to{' '}
              <Link
                color='red.500'
                fontWeight={'bold'}
                as={NextLink}
                href='/submit'
              >
                this page
              </Link>{' '}
              instead.
            </Text>
          </Box>
          <Box flex={2}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Stack gap={8}>
                    <Field name='name'>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                          isDisabled={isSubmitting}
                        >
                          <FormLabel>Full name</FormLabel>
                          <Input {...field} />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='email'>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                          isDisabled={isSubmitting}
                        >
                          <FormLabel>Email address</FormLabel>
                          <Input {...field} />
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='message'>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.message && form.touched.message
                          }
                          isDisabled={isSubmitting}
                        >
                          <FormLabel>Message</FormLabel>
                          <Textarea {...field} h={200} />
                          <FormErrorMessage>
                            {form.errors.message}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      type='submit'
                      colorScheme='yellow'
                      isLoading={isSubmitting}
                    >
                      Send
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
          <Box flex={{ base: 0, md: 1 }} />
        </Stack>
      </Container>
    </Box>
  );
}
