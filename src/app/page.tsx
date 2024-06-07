"use client";
import CardList from "@/components/CardList";
import { useCardStore } from "@/store/useCardStore";
import { useAuthStore } from "@/store/useAuthStore";
import LoginPrompt from "@/components/LoginPrompt";

export default function HomePage() {
  const cards = useCardStore((state) => state.cards);
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    return <LoginPrompt />;
  }

  return (
    <section>
      <CardList cards={cards} />
    </section>
  );
}
