import { useEffect, useState } from 'react'
import { Card } from '../Card/Card'

interface CardProps {
    "id": number;
    "img": string;
    "title": string;
    "description": string;
}

export function CardList() {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch('/card.json')
    
      .then((response) => 
        response.json())
      
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
          key={card.id}
          id={card.id}
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  )
}

