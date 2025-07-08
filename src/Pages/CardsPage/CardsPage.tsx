import { useLocation } from "react-router"
import { useEffect, useState } from 'react'
import { Header } from "../../components/Header/Header"
import { Card } from "../../components/Card/Card"


interface CardProps {
    "id": number;
    "img": string;
    "title": string;
    "description": string;
}

const PAGE_LIMITS = 10;

export function CardsPage() {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const limit = searchParams.get('limit') || PAGE_LIMITS;
    const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch(`/Pagecard.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Данные из card.json:', data);
        setCards(data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, [limit]);

  return (
    <div className="container container__cards">
      <Header/>
      <div className="pages__cards">
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
    </div>
  )
}

