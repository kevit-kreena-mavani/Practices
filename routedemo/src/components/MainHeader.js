import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={styles.header}>
      {/* ============================ LINKS USING <a></a> ===========================   
      <nav> 
        <ul>
          <li>
            <a href="/welcome">Welcome Page</a>
          </li>
          <li>
            <a href="/product">Product Page</a>
          </li>
        </ul> 
      </nav>       */}

      {/* ========================USING ROUTER V5 ===============================
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/product">
              Product
            </NavLink>
          </li>
        </ul>
      </nav> */}

      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/welcome"
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/product"
            >
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MainHeader;
