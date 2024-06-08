import { act } from 'react';
import { renderHook } from '@testing-library/react';
import { useCardStore } from '../../store/useCardStore';
import { ICard } from '../../types/common/card.types';
import { CardPriority, CardStatus, CardType } from '../../constants/card.enum';

const resetStore = () => {
  const { result } = renderHook(() => useCardStore.getState());
  result.current.cards = [];
};

describe('useCardStore', () => {
  beforeEach(() => {
    localStorage.clear();
    resetStore();
  });

  test('should return the initial state', () => {
    const { result } = renderHook(() => useCardStore());
    expect(result.current.cards).toEqual([]);
  });

  test('should add a card', () => {
    const { result } = renderHook(() => useCardStore());

    const newCard: ICard = {
      id: '1',
      title: 'Test Card 1',
      description: 'Description of test card',
      priority: CardPriority.High,
      status: CardStatus.InProgress,
      type: CardType.Feature,
    };

    act(() => {
      result.current.addCard(newCard);
    });

    expect(result.current.cards).toEqual([newCard]);
  });

  test('should remove a card', () => {
    const { result } = renderHook(() => useCardStore());

    const card1: ICard = {
      id: '1',
      title: 'Test Card 1',
      description: 'Description of test card',
      priority: CardPriority.High,
      status: CardStatus.InProgress,
      type: CardType.Feature,
    };
    const card2: ICard = {
      id: '2',
      title: 'Test Card 2',
      description: 'Description of test card',
      priority: CardPriority.High,
      status: CardStatus.InProgress,
      type: CardType.Feature,
    };

    act(() => {
      result.current.addCard(card1);
      result.current.addCard(card2);
    });

    expect(result.current.cards).toEqual([card1, card2]);

    act(() => {
      result.current.removeCard('1');
    });

    expect(result.current.cards).toEqual([card2]);
  });
});
