import styles from './Home.module.css'; 

function Logo() {
    return (
      <div>      
        <div className={styles.home_container}>
          {/* <h1>Conciliação <span>i7 - Equals / Winthor</span></h1> */}
          <h1>Sistema de Conciliação de Títulos Equals / Winthor - i7</h1>
        </div>        
      </div>
    );
  }
  
  export default Logo