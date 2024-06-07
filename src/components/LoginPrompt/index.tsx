import { Box, Text } from "@chakra-ui/react";

export default function LoginPrompt() {
  return (
    <Box
      width="100%"
      height="60vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center">
        <Text fontSize="xl" mb="4">
          You need to log in to see the card list
        </Text>
      </Box>
    </Box>
  );
}
