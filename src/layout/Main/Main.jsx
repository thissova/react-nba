import { Route, Routes } from "react-router-dom";
import Teams from "../../pages/Teams/Teams";
import TeamInfo from "../../pages/TeamInfo/TeamInfo";

function Main({ teams, page }) {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Teams teams={teams} page={page} />} />
        <Route path="/teams" element={<Teams teams={teams} page={page} />} />
        <Route path="/teams/:teamCode" element={<TeamInfo teams={teams} />} />
      </Routes>
    </main>
  );
}

export default Main;
