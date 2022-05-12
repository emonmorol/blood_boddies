import React from "react";

const CampaignCard = ({ campaign }) => {
  //   console.dir(campaign);
  const { title, detail, image, date, place, time } = campaign;
  return (
    <div class="card card-side bg-base-100 border cursor-grab rounded-2xl overflow-hidden my-10">
      <div className="w-1/3">
        <img className="object-cover" src={image} alt="Movie" />
      </div>
      <div class="card-body flex-2 w-2/3">
        <p>
          <i class="text-primary mr-2 fa-solid fa-calendar-days"></i> {date}
        </p>
        <div className="">
          <h2 class="card-title text-gray-600 font-medium my-2">{title}</h2>
          <p className="">{detail}</p>
        </div>
        <div className="flex justify-between">
          <p>
            <i class="text-primary mr-2 fa-solid fa-clock"></i> {time}
          </p>
          <p>
            <i class="text-primary mr-2 fa-solid fa-location-dot"></i> {place}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
