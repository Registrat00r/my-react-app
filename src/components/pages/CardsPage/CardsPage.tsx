import { useLocation } from "react-router";
import { useEffect, useState } from 'react';
import { Header } from "../../Header/Header";
import Card from "../../Card/Card";


interface CardProps {
    "id": number;
    "title": string;
    "body": string;
}

const PAGE_LIMITS = 10;

export function CardsPage() {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const limit = searchParams.get('limit') || PAGE_LIMITS;
    const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
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
    <div className="container__cards">
      <Header/>
      <div className="pages__cards">
        {cards.map(card => (
          <Card
            id={card.id}
            title={card.title}
            text={card.body}
          />
        ))}
      </div>
    </div>
  )
}

