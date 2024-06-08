import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <Box
      as='footer'
      width='100%'
      position='fixed'
      bottom='0'
      left='0'
      p={4}
      bgColor='gray.100'
      shadow='sm'
      zIndex='docked'
    >
      <Text>© 2024 Test App</Text>
    </Box>
  );
}
