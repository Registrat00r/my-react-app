import { useEffect, useState } from 'react';
import Card from './Cards';

interface CardData {
  role: string;
  name: string;
  image: string;
  description: string;
  id: number;
}

export default function CardList() {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    fetch('/cards.json')
      .then((response) => response.json())
      .then((data) => {
        console.log('Данные из card.json:', data);
        setCards(data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  return (
    <div className="creator__card__container">
      {cards.map((card) => (
        <Card key={card.id} cardData={card} />
      ))}
    </div>
  )
}

