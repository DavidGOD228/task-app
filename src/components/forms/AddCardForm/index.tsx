import { v4 as uuidv4 } from "uuid";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  RadioGroup,
  Radio,
  Heading,
  Stack,
  useColorModeValue,
  Button,
  useToast,
  Box,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICard } from "@/types/common/card.types";

import { cardSchema } from "@/types/schemas/add-card.shema";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { useCardStore } from "@/store/useCardStore";
import Card from "../../Card";

export default function AddCardForm() {
  const toast = useToast();
  const addCard = useCardStore((state) => state.addCard);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICard>({
    resolver: zodResolver(cardSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ICard> = (data) => {
    const newCard = {
      ...data,
      id: uuidv4(),
    };

    addCard(newCard);
    router.push(ROUTES.HomePage);
    toast({
      title: "Card Added",
      description: "You've successfully added a new card.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box maxW="500px" mx="auto" mt="20px" p="10px" mb="60px">
      <Heading as="h2" size="xl" mb="30px">
        Create new card
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.title} mb="10px">
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input id="title" {...register("title")} />
          {errors.title && (
            <FormHelperText color="red.500">
              {errors.title.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.description} mb="10px">
          <FormLabel htmlFor="description" mb="10px">
            Description
          </FormLabel>
          <Textarea
            id="description"
            {...register("description")}
            placeholder="Enter detailed description here..."
            resize="vertical"
          />
          {errors.description && (
            <FormHelperText color="red.500">
              {errors.description.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.priority} mb="10px">
          <FormLabel htmlFor="priority">Priority</FormLabel>
          <Select
            id="priority"
            placeholder="Select priority"
            {...register("priority")}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Select>
          {errors.priority && (
            <FormHelperText color="red.500">
              {errors.priority.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.status} mb="10px">
          <FormLabel htmlFor="status">Status</FormLabel>
          <Select
            id="status"
            placeholder="Select status"
            {...register("status")}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </Select>
          {errors.status && (
            <FormHelperText color="red.500">
              {errors.status.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl as="fieldset" isInvalid={!!errors.type} mb="10px">
          <FormLabel as="legend">Type</FormLabel>
          <RadioGroup>
            <Stack direction="row">
              <Radio {...register("type")} value="Task">
                Task
              </Radio>
              <Radio {...register("type")} value="Bug">
                Bug
              </Radio>
              <Radio {...register("type")} value="Feature">
                Feature
              </Radio>
            </Stack>
          </RadioGroup>

          {errors.type && (
            <FormHelperText color="red.500">
              {errors.type.message}
            </FormHelperText>
          )}
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit" width="100%">
          Submit
        </Button>
      </form>
    </Box>
  );
}
