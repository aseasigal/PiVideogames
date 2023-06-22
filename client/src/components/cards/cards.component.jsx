import Card from "../card/card.component";
import styles from "./cards.module.css";

function Cards({ allGames }) {
  return (
    <div className={styles.Cards}>
      {allGames?.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
}

export default Cards;
