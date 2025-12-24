import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ team }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/teams/${team.code}`);
  };

  return (
    <li className={styles.card} onClick={handleClick}>
      <div
        className={styles.imageContainer}
        style={{ backgroundColor: `${team.colors.main}` }}>
        <img
          src={team.image}
          alt={`${team.code}-img`}
          className={styles.logo}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.teamName}>{team.name}</h2>
        <p>The city of {team.city}</p>
        <p></p>
      </div>
    </li>
  );
}

export default Card;
