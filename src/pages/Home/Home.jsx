import styles from "./Home.module.css";
import React, { useState } from "react";

function Home({ teams, page }) {
  const filteredTeams = teams.filter((team, index) => {
    if (8 * page - 8 <= index && 8 * page > index) {
      return team;
    }
  });
  console.log(filteredTeams);

  return (
    <>
      <ul className={styles.container}>
        {filteredTeams.map((team) => {
          return (
            <li key={team.code} className={styles.card}>
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
        })}
      </ul>
    </>
  );
}

export default Home;
