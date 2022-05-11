import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import NavContact from "./Pages/Shared/Navbar/NavContact";

function App() {
  return (
    <div>
      <NavContact />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
