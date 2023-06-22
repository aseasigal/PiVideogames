import styles from './navbar.module.css';

function Navbar({ handleChange, handleSubmit }) {
  return (
    <div className={styles.Navbar}>
      <form onChange={handleChange}>
        <input className={styles.NavbarInput} type="search" />
        <button className={styles.NavbarButton} type="submit" onClick={handleSubmit}>
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Navbar;
