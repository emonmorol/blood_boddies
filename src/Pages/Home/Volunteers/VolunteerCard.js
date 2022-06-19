import React from "react";
import { Link } from "react-router-dom";

const VolunteerCard = ({ volunteer }) => {
  const { image, name, post } = volunteer;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="pt-3 px-5 bg-white">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{post}</p>
      </div>
      <div className="bg-gray-100 h-16 flex justify-center items-center">
        <Link to="#">
          <i className="mr-2 bg-white py-3 px-3.5 shadow fa-brands fa-linkedin-in"></i>
        </Link>
        <Link to="#">
          <i className="mr-2 bg-white py-3 px-3.5 shadow fa-brands fa-google"></i>
        </Link>
        <Link to="#">
          <i className="mr-2 bg-white py-3 px-3.5 shadow fa-brands fa-twitter"></i>
        </Link>
        <Link to="#">
          <i className="mr-2 bg-white py-3 px-4 shadow fa-brands fa-facebook-f"></i>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerCard;
