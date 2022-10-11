import styles from './Home.module.css';
import Logo from './Logo';
import Footer from '../../layout/modulos/Footer';

function Home() {
  return (
    <div className={styles.home_page}>
      <div className={styles.home_container}>
        <Logo />
      </div>
      <div className={styles.home_footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
