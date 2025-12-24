import React, { useState, useEffect } from "react";
import { getAllTeams } from "../api/api";

const useFetchTeams = () => {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getAllTeams();
        setTeams(response);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return { teams, error, isLoading };
};

export default useFetchTeams;
