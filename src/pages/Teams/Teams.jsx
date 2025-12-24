import Card from "../../components/Card/Card";
import styles from "./Teams.module.css";
import React, { useState } from "react";

function Teams({ teams, page }) {
  const filteredTeams = teams.filter((team, index) => {
    if (8 * page - 8 <= index && 8 * page > index) {
      return team;
    }
  });

  return (
    <>
      <ul className={styles.container}>
        {filteredTeams.map((team) => {
          return <Card key={team.code} team={team} />;
        })}
      </ul>
    </>
  );
}

export default Teams;
