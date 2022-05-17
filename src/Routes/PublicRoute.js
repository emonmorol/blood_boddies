import About from "../Pages/AboutPage/About";
import Blogs from "../Pages/Blogs/Blogs";
import Campaign from "../Pages/Campaign/Campaign";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/home", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/campaign", name: "Campaign", Component: Campaign },
  { path: "/blogs", name: "Blogs", Component: Blogs },
  { path: "/login", name: "Login", Component: Login },
  { path: "/register", name: "Register", Component: Register },
];
