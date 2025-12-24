import { useParams } from "react-router-dom";
import styles from "./TeamInfo.module.css";

function TeamInfo({ teams }) {
  const { teamCode } = useParams();
  const team = teams.find((team) => {
    return team.code === teamCode;
  });
  console.log(team);

  return (
    <div>
      <h2 className={styles.title}>{team.name}</h2>
      <div className={styles.logoContainer}>
        <div className={styles.imageContainer}>
          <img src={team.image} alt={`team-${team.code}`} />
        </div>

        <p>{team.name} logo</p>
      </div>

      <div className={styles.teamDesc}>
        <h3>{team.name} description</h3>
        <p>{team.description}</p>
      </div>

      <div className={styles.teamsStars}>
        <h3>{team.name} stars</h3>
        <div className={styles.players}>
          {team.stars.map((star) => {
            return (
              <div
                key={star.name}
                className={styles.playerCard}
                style={{ backgroundColor: team.colors.main }}>
                <img src={star.image} alt={star.name} />
                <div
                  className={styles.playerInfo}
                  style={{ color: team.colors.accent }}>
                  <p>{star.number}</p>
                  <p>{star.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TeamInfo;
