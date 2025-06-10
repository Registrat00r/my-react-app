interface CardProps {
  cardData: {
    id: number;
    description: string;
    image: string;
    name: string;
    role: string;
  };
}
export default function Card({cardData}: CardProps) {
  return (
    <div className={`creator__card creator__card-${cardData.id}`}>
      <div className="creator__card__content">
        <p className="creator__card__description">{cardData.description}</p>
        <img className="creator__card__image" src={cardData.image} alt={cardData.name} />
        <p className="creator__card__name"> {cardData.name} <br />
          <span className="creator__card__role">{cardData.role}</span>
        </p>
      </div>
    </div>
  );
}
