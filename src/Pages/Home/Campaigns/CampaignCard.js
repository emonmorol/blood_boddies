import React from "react";

const CampaignCard = ({ campaign }) => {
  //   console.dir(campaign);
  const { title, detail, image, date, place, time } = campaign;
  return (
    <div className="card lg:card-side border cursor-grab my-10 bg-gray-50 w-full md:w-2/3 lg:w-2/3 mx-auto shadow-xl">
      <figure className="w-full hidden lg:block md:w-1/3 lg:w-1/3">
        <img className="w-full object-fill" src={image} alt="Album" />
      </figure>
      <div className="card-body justify-center w-full md:w-2/3 lg:w-2/3">
        <span>
          <i className="text-primary mr-2 fa-solid fa-calendar-days"></i> {date}
        </span>
        <div className="">
          <h2 className="w-full mx-auto text-center text-gray-600 text-3xl uppercase font-semibold my-2">
            {title}
          </h2>
          <p className="text-lg my-4">{detail}</p>
        </div>
        <div className="flex justify-between">
          <p>
            <i className="text-primary mr-2 fa-solid fa-clock"></i> {time}
          </p>
          <p>
            <i className="text-primary mr-2 fa-solid fa-location-dot"></i>{" "}
            {place}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
