import { NavLink } from "react-router-dom";
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
  return <header className={styles.header}>
    <div className={styles.logo}>Great Quote</div>
    <nav className={styles.nav}>
        <ul>
            <li>
                <NavLink to="/quotes" className={styles.active}>All Quotes</NavLink>
            </li>
            <li>
                <NavLink to="/new-quote" className={styles.active}>Add Quotes</NavLink>
            </li>
        </ul>
    </nav>
  </header>;
};
export default MainNavigation;
