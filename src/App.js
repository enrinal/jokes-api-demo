import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Box, Button, Heading } from '@chakra-ui/react';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
      <Router>
        <Heading as="h1" size="lg" mb={4}>
          Jokes For Days
        </Heading>
        <Box p={4}>
          <Button as={Link} to="/" mr={4}>
            Home
          </Button>
          <Button as={Link} to="/about" mr={4}>
            About
          </Button>
          {!isAuthenticated ? (
              <Button as={Link} to="/login">
                Login
              </Button>
          ) : (
              <Button onClick={handleLogout}>Logout</Button>
          )}
        </Box>
        <Box p={4}>
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
            />
            <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                }
            />
          </Routes>
        </Box>
      </Router>
  );
}

export default App;
