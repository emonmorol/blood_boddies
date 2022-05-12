import React from "react";
import VolunteerCard from "./VolunteerCard";
import team1 from "../../../Images/team_6.jpg";
import team2 from "../../../Images/team_7.jpg";
import team3 from "../../../Images/team_9.jpg";

const Volunteers = () => {
  const volunteersInfo = [
    {
      id: 1,
      name: "JOHN ABRAHAM",
      image: team2,
      post: "MANAGER",
    },
    {
      id: 2,
      name: "MELISSA MUNOZ",
      image: team1,
      post: "FOUNDER",
    },
    {
      id: 3,
      name: "ALEXANDER GARY",
      image: team3,
      post: "CO-FOUNDER",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto my-24 flex flex-col items-center">
        <div className="flex flex-col">
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-600 uppercase text-center">
            OUR VOLUNTEERS
          </h2>
          <hr className="border w-[10%] my-3 border-primary mx-auto" />
          <span className="my-3 px-5 text-center">
            The volunteers who give their time and talents help to fulfill our
            mission.
          </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-3">
          {volunteersInfo.map((volunteer) => (
            <VolunteerCard key={volunteer.id} volunteer={volunteer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
