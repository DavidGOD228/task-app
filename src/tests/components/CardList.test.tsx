import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardList from '@/components/CardList';
import { CardPriority, CardStatus, CardType } from '@/constants/card.enum';

describe('CardList Component', () => {
  test('displays "No Cards" when no cards are provided', () => {
    render(<CardList cards={[]} />);
    expect(screen.getByText('No Cards')).toBeInTheDocument();
  });

  test('displays "No Cards" when cards prop is undefined', () => {
    render(<CardList />);
    expect(screen.getByText('No Cards')).toBeInTheDocument();
  });

  test('renders cards correctly when card data is provided', () => {
    const cards = [
      {
        id: '1',
        title: 'Card 1',
        description: 'Description 1',
        priority: CardPriority.High,
        status: CardStatus.Completed,
        type: CardType.Bug,
      },
      {
        id: '2',
        title: 'Card 2',
        description: 'Description 2',
        priority: CardPriority.Low,
        status: CardStatus.NotStarted,
        type: CardType.Feature,
      },
    ];
    render(<CardList cards={cards} />);

    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  test('component snapshot', () => {
    const cards = [
      {
        id: '1',
        title: 'Card 1',
        description: 'Description 1',
        priority: CardPriority.Low,
        status: CardStatus.NotStarted,
        type: CardType.Feature,
      },
    ];
    const { asFragment } = render(<CardList cards={cards} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
