import React, { useEffect, useState } from 'react';
import { Heading, Text, Box, Spinner, Button, Flex } from '@chakra-ui/react';

function Home() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJoke = () => {
    setLoading(true);
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => {
      setJoke(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  if (loading) {
    return (
        <Flex justify="center" align="center" height="100vh">
          <Spinner size="xl" />
        </Flex>
    );
  }

  return (
      <Flex direction="column" align="center" p={4}>
        <Heading mb={4}>Home Page</Heading>
        {joke ? (
            <Box textAlign="center" mb={4}>
              <Heading as="h3" size="lg" mb={2}>
                {joke.type === 'single' ? 'Joke' : 'Setup'}
              </Heading>
              <Text fontSize="xl">
                {joke.type === 'single' ? joke.joke : joke.setup}
              </Text>
              {joke.type === 'twopart' && (
                  <Text fontSize="xl" mt={2}>
                    <strong>Punchline:</strong> {joke.delivery}
                  </Text>
              )}
            </Box>
        ) : (
            <Text>No joke found</Text>
        )}
        <Button colorScheme="teal" onClick={fetchJoke}>
          Get Another Joke
        </Button>
      </Flex>
  );
}

export default Home;
