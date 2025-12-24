import React, { useEffect, useState } from "react";
import "./App.css";
import { getAllTeams } from "./api/api";
import useFetchTeams from "./hooks/useFetch";
import Teams from "./pages/Teams/Teams";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { BeatLoader } from "react-spinners";
import Main from "./layout/Main/Main";

function App() {
  const [page, setPage] = useState(1);
  const { teams, isLoading, error } = useFetchTeams();

  return (
    <div className="App">
      <Header setPage={setPage} page={page} />
      {!isLoading ? (
        <Main teams={teams} page={page} />
      ) : (
        <BeatLoader size={30} className="loader" />
      )}
      <Footer />
    </div>
  );
}

export default App;
//npx json-server db.json -p 3030
