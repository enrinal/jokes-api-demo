import React, { useState } from 'react';
import { Box, Button, Input, Heading, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple authentication logic for demonstration
    if (username === 'admin' && password === 'password') {
      onLogin();
      navigate('/'); // Redirect to the home page after login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
      <Flex
          direction="column"
          align="center"
          height="100vh"
          p={4}
      >
        <Box
            p={8}
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
            width="100%"
            maxWidth="400px"
            textAlign="center"
        >
          <Heading mb={4}>Login</Heading>
          <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              mb={3}
          />
          <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              mb={3}
          />
          {error && <Text color="red.500" mb={3}>{error}</Text>}
          <Button colorScheme="teal" onClick={handleLogin} width="full">
            Login
          </Button>
        </Box>
      </Flex>
  );
}

export default Login;
