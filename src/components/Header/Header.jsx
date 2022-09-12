import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1> React Forum </h1>
      <nav className={styles.nav}>
        <Link to="/">
          <button className={styles.navBtn}>Home</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
