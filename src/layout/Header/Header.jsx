import { Link } from "react-router-dom";
import arrowSvg from "./../../images/right-arrow.svg";
import styles from "./Header.module.css";

function Header({ page, setPage }) {
  return (
    <header>
      <div className={styles.container}>
        <Link to={"/teams"} className={styles.title}>
          Nba Teams
        </Link>
        <p className={styles.pageNumber}>{page}</p>
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => {
              if (page === 1) return;
              setPage(page - 1);
            }}>
            <img
              src={arrowSvg}
              alt="arrow"
              style={{ color: "black", transform: "rotate(180deg)" }}
            />
          </button>
          <button
            onClick={() => {
              if (page === 4) return;
              setPage(page + 1);
            }}>
            <img src={arrowSvg} alt="arrow" style={{ color: "black" }} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
