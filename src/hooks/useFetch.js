import React, { useState, useEffect } from "react";
import { getAllTeams } from "../api/api";

const useFetchTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllTeams();
      setTeams(response);
    };
    fetchData();
  }, []);
  return teams;
};

export default useFetchTeams;
