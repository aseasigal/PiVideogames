import styles from './navbar.module.css';
import {Link} from "react-router-dom"


function Navbar({ handleChange, handleSubmit }) {
  return (
    <div className={styles.Navbar}>
      <form onChange={handleChange}>
        <input className={styles.NavbarInput} type="search" />
        <button className={styles.NavbarButton} type="submit" onClick={handleSubmit}>
          Buscar
        </button>
        <button className={styles.CrearButton}>
        <Link  to={`/create`}>Crear Juego</Link>
        </button>
      </form>
    </div>
  );
}

export default Navbar;
