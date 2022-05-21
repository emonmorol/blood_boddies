import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const baseAxios = axios.create({
  baseURL: "http://localhost:5000",
});

baseAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (!config.headers.authorization) {
      config.headers.authorization = `${localStorage.getItem(
        "accessJwtToken"
      )}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    // signOut(auth);
    return Promise.reject(error);
  }
);

// Add a response interceptor
baseAxios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const navigate = useNavigate();
    if (error.response.status === 403) {
      // refresh token
      // send to the server
      signOut(auth);
      // navigate("/login");
    }
    return Promise.reject(error);
  }
);

export default baseAxios;

// import axios from "axios";
// import { signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import auth from "../firebase.init";

// const baseAxios = axios.create({
//   baseURL: "http://localhost:5000",
//   headers: {
//     authorization: localStorage.getItem("accessJwtToken"),
//   },
// });
