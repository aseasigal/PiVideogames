import styles from "./landing.module.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <video
        className={styles.LandingBackground}
        autoPlay
        muted
        loop
        src="https://www.leagueoflegends.com/static/hero-de0ba45b1d0959277d12545fbb645722.mp4"
      ></video>
      <div className={styles.LandingMenu}>
        <button className={styles.LandingButton} type="button">
          <Link className={styles.LandingLink} to={`home`}>ENTRAR</Link>
        </button>
      </div>
    </div>
  );
}

export default Landing;
