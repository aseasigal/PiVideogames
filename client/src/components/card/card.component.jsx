import { Link } from "react-router-dom";
import style from "./card.module.css";

function Card({ game }) {
  if (!game) return <div></div>;

  const { name, image, genres, rating, id } = game;

  return (
    <div className={style.CardContainer}>
      <Link to={`home/${id}`} className={style.CardLink}>
        <div className={style.Card}>
          <div
            className={style.CardImage}
            style={{ backgroundImage: `url(${image})` }}
          >
            &nbsp;
          </div>
          <div className={style.CardContentContainer}>
            <div className={style.CardContent}>
            <span>{name}</span>
            <span className={style.CardRating}>{rating}/5</span>
            </div>
            <div className={style.CardChips}>
              {genres?.map((x) => (
                <span key={x.id} className={style.CardChip}>{x.name}</span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
