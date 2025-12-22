import React, { useEffect, useState } from "react";
import "./App.css";
import { getAllTeams } from "./api/api";
import useFetchTeams from "./hooks/useFetch";
import Home from "./pages/Home/Home";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

function App() {
  const [page, setPage] = useState(1);
  const teams = useFetchTeams();
  return (
    <div className="App">
      <Header setPage={setPage} page={page} />
      <main>
        <Home teams={teams} page={page} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
