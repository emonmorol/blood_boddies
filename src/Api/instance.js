import axios from "axios";

const baseAxios = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    authorization: `Bearer ${localStorage.getItem("accessJwtToken")}`,
  },
});

export default baseAxios;
