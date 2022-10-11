import { Link } from 'react-router-dom';
import styles from "./Footer.module.css";

function Footer() {
  return (    
    <div className={styles.container}>
      <Link className={styles.logo} to="/">i7 / Equals</Link>        
    </div>
  );
}

export default Footer;