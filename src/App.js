import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/AboutPage/About";
import Blogs from "./Pages/Blogs/Blogs";
import Campaign from "./Pages/Campaign/Campaign";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import NavContact from "./Pages/Shared/Navbar/NavContact";

function App() {
  return (
    <div>
      <Navbar>
        <NavContact />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
