import { StateCreator, create } from "zustand";
import { ICard } from "@/types/common/card.types";
import { persist } from "zustand/middleware";

interface CardStoreState {
  cards: ICard[];
  addCard: (newCard: ICard) => void;
  removeCard: (id: string) => void;
}

export const useCardStore = create<CardStoreState>(
  persist(
    (set) => ({
      cards: [],

      addCard: (newCard: ICard) =>
        set((state) => ({
          cards: [...state.cards, newCard],
        })),
      removeCard: (id: string) =>
        set((state) => ({
          cards: state.cards.filter((card) => card.id !== id),
        })),
    }),
    {
      name: "card-storage",
    }
  ) as StateCreator<CardStoreState, [], []>
);
