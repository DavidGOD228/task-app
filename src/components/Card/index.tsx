import {
  Box,
  IconButton,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ICard } from "@/types/common/card.types";
import { useCardStore } from "@/store/useCardStore";
import { CloseIcon } from "@chakra-ui/icons";
interface Props extends ICard {}

export default function Card({
  id,
  title,
  description,
  priority,
  status,
  type,
}: Props) {
  const removeCard = useCardStore((state) => state.removeCard);

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      position="relative"
      borderRadius="lg"
      overflow="hidden"
      borderColor={useColorModeValue("gray.400", "gray.700")}
      p={4}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <IconButton
        aria-label="Delete card"
        icon={<CloseIcon />}
        position="absolute"
        right="2"
        p="10px"
        top="2"
        size="lx"
        onClick={() => removeCard(id)}
      />
      <VStack align="stretch" p={4} spacing={3}>
        <Text fontWeight="bold" fontSize="xl">
          {title}
        </Text>
        <Text>{description}</Text>
        <Text fontSize="sm" color="gray.500">
          Priority: {priority}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Status: {status}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Type: {type}
        </Text>
      </VStack>
    </Box>
  );
}
