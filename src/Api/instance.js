import axios from "axios";

const baseAxios = axios.create({
  baseURL: "https://blood-buddies-server.herokuapp.com",
});

export default baseAxios;
