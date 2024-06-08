'use client';
import React from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { AddIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { usePathname, useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

export default function Header() {
  const { isLoggedIn, login, logout } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  const isAddCardPage = pathname === ROUTES.AddCardPage;

  const handleLogin = () => {
    if (isLoggedIn) {
      logout();
    } else {
      login();
    }
    router.push(ROUTES.HomePage);
  };

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        {isAddCardPage ? (
          <Button leftIcon={<ChevronLeftIcon />} onClick={() => router.back()}>
            Back
          </Button>
        ) : (
          <Button
            onClick={() => router.push(ROUTES.AddCardPage)}
            leftIcon={<AddIcon />}
            isDisabled={!isLoggedIn}
            colorScheme='teal'
          >
            Add Card
          </Button>
        )}
        <Button mr={4} onClick={handleLogin}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </Button>
      </Flex>
    </Box>
  );
}
