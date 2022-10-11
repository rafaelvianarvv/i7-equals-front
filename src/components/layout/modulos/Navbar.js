import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";
import MenuTopoTitulos from "../menus/MenuTopoTitulos"
import MenuTopoParametros from "../menus/MenuTopoParametros"
import MenuTopoConciliacao from '../menus/MenuTopoConciliacao';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>        
        <Link className={styles.logo} to="/">i7 / Equals</Link>
        <ul className={styles.list}>
          <li><MenuTopoConciliacao /></li>
          <li><MenuTopoTitulos /></li>
          <li><MenuTopoParametros /></li>
        </ul>          
      </div>
    </nav>
  );
}

export default Navbar;