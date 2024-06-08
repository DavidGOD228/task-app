import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import { ICard } from '@/types/common/card.types';
import Card from '../Card';

interface Props {
  cards?: ICard[];
}

export default function CardList({ cards }: Props) {
  if (!cards || cards.length === 0) {
    return (
      <Box
        width='100%'
        height='60vh'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        No Cards
      </Box>
    );
  }

  return (
    <Grid
      padding='20px'
      mx='auto'
      mb='50px'
      templateColumns='repeat(auto-fill, minmax(250px, 1fr))'
      gap={6}
    >
      {cards.map(({ id, title, description, priority, status, type }) => (
        <Card
          key={id}
          id={id}
          title={title}
          description={description}
          priority={priority}
          status={status}
          type={type}
        />
      ))}
    </Grid>
  );
}
