interface CardProps {
  id: number;
  img: string;
  title: string;
  description: string;
}

export function Card({ id, img, title, description }: CardProps) {
  return (
    <div className={`creator__card creator__card-${id}`}>
      <div className="creator__card__content">
        <img src={img} alt={title} className="creator__card-img" />
        <h3 className="card__text">{title}</h3>
      </div>
      <p className="card__body">{description}</p>
    </div>
  );
}