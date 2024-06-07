import { CardPriority, CardStatus, CardType } from "@/constants/card.enum";

export interface ICard {
  title: string;
  description: string;
  priority: CardPriority;
  status: CardStatus;
  type: CardType;
  id: string;
}
