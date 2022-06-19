import React from "react";
import { Link } from "react-router-dom";

const NavContact = () => {
  return (
    <>
      <div className="hidden lg:flex bg-primary py-3 justify-around mx-w-7xl">
        <div>
          <Link to="#" className="bg-white px-2 py-1 rounded-full mr-2">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="#" className="bg-white px-2 py-1 rounded-full mr-2">
            <i className="fa-brands fa-instagram-square"></i>
          </Link>
          <Link to="#" className="bg-white px-2 py-1 rounded-full mr-2">
            <i className="fa-brands fa-youtube"></i>
          </Link>
          <Link to="#" className="bg-white px-2 py-1 rounded-full mr-2">
            <i className="fa-brands fa-google"></i>
          </Link>
          <Link to="#" className="bg-white px-2 py-1 rounded-full mr-2">
            <i className="fa-brands fa-twitter"></i>
          </Link>
        </div>
        <span className="flex items-center gap-2">
          <span className="font-semibold">Contact</span>: East Shibgonj, Sylhet,
          3100 <i className="fa-solid fa-phone"></i>
          <span className="font-semibold">Call Us</span>: +880-1891-82709
          <i className="fa fa-building-o"></i>
        </span>
      </div>
    </>
  );
};

export default NavContact;
