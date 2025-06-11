interface CardProps{
  id: number;
  title: string;
  text: string;
}

export default function Card({ id, title, text }: CardProps) {
  return (
    <div className={`creator__card creator__card-${id}`}>
      <div className={"creator__card__content"}>
        <h3 className="card__text">{title}</h3>
        <p className="card__body">{text}</p>
      </div>
    </div>
  );
}