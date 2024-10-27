import React from 'react';
import { Heading, Text, Box } from '@chakra-ui/react';

function About() {
  return (
      <Box>
        <Heading>About Page</Heading>
        <Text mt={4}>This is a simple React application using Chakra UI, React Router, and data fetching with Axios.</Text>
      </Box>
  );
}

export default About;
