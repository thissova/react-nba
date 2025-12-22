import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";

export const getAllTeams = async () => {
  const response = await axios.get("teams");
  return response.data;
};
