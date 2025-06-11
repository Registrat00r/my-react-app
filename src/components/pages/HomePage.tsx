import { useEffect, useState } from 'react';
import Card from '../Card/Card';

interface CardProps {
  "userId": number;
    "id": number;
    "title": string;
    "body": string;
}

export default function HomePage() {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
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
      {cards.map(card => (
        <Card
          id={card.id}
          title={card.title}
          text={card.body}
        />
      ))}
    </div>
  )
}

