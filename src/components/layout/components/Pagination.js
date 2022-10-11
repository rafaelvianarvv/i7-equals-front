import { ReactComponent as Arrow } from "../../../assets/img/arrow.svg";
import styles from './Pagination.module.css';

function Pagination({page, onChange}) {
  return (
    <div className={styles.pagination_container}>
      <div className={styles.pagination_box}>
        <button
          className={styles.pagination_button}
          disabled={page.first}
          onClick={() => onChange(page.number - 1)}
        >
        <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button
          className={styles.pagination_button}
          disabled={page.last}
          onClick={() => onChange(page.number + 1)}
        >
          <Arrow className={styles.flip_horizontal} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
