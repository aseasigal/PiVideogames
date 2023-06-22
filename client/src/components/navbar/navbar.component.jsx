import styles from './navbar.module.css';
import {Link} from "react-router-dom"


function Navbar({ handleChange, handleSubmit, allGenres, handleFilterGenre }) {
  return (
    <div className={styles.Navbar}>
      <form className={styles.NavbarForm} onChange={handleChange}>
        <div className={styles.NavbarSearch}>
          <input className={styles.NavbarInput} type="search" />
          <button
            className={styles.NavbarButton}
            type="submit"
            onClick={handleSubmit}
          >
            Buscar
          </button>
          <button className={styles.CrearButton}>
            <Link to={`/create`}>Crear Juego</Link>
          </button>
        </div>
        <div className={styles.NavbarFilter}>
          <select
            className={styles.NavbarButton}
            onChange={(e) => handleFilterGenre(e)}
          >
            {allGenres?.map((genre, index) => (
              <option key={index} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default Navbar;
