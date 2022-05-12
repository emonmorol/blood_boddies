import React from "react";

const CampaignCard = ({ campaign }) => {
  //   console.log(campaign);
  const { title, detail, image, date, place, time } = campaign;
  return (
    <div class="card card-side bg-base-100 shadow-xl border cursor-grab">
      <div className="w-1/3">
        <img src={image} alt="Movie" />
      </div>
      <div class="card-body flex-2 w-2/3">
        <small>
          <i class="text-primary mr-2 fa-solid fa-calendar-days"></i> {date}
        </small>
        <h2 class="card-title text-gray-600 font-medium">{title}</h2>
        <p className="">{detail}</p>
        <div className="flex justify-between">
          <small>
            <i class="text-primary mr-2 fa-solid fa-clock"></i> {time}
          </small>
          <small>
            <i class="text-primary mr-2 fa-solid fa-location-dot"></i> {place}
          </small>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
