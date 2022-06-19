import React from "react";

const DonationProcessCard = ({ singleStep }) => {
  const { title, detail, step, image } = singleStep;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="bg-black">
        <figure className="opacity-60 ">
          <img className="w-full object-cover" src={image} alt="Shoes" />
        </figure>
      </div>
      <div className="card-body relative">
        <div className="w-16 h-16 text-3xl text-white m-3 font-extrabold bg-primary rounded-full flex justify-center items-center absolute bottom-full right-0">
          {step}
        </div>
        <h2 className="card-title text-center">{title}</h2>
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default DonationProcessCard;
