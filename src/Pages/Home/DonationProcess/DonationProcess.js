import React from "react";
import DonationProcessCard from "./DonationProcessCard";
import step1 from "../../../Images/process_1.jpg";
import step2 from "../../../Images/process_2.jpg";
import step3 from "../../../Images/process_3.jpg";

const DonationProcess = () => {
  const stepInfo = [
    {
      id: 1,
      title: "REGISTRATION",
      detail:
        "You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.",
      step: 1,
      image: step1,
    },
    {
      id: 2,
      title: "SCREENING",
      detail:
        "A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process.",
      step: 2,
      image: step2,
    },
    {
      id: 3,
      title: "DONATION",
      detail:
        "After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.",
      step: 3,
      image: step3,
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto my-24 flex flex-col items-center">
        <div className="flex flex-col">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-600 uppercase text-center">
            DONATION PROCESS
          </h2>
          <hr className="border w-[10%] my-3 border-primary mx-auto" />
          <span className="my-3 px-5 text-center">
            Campaigns to encourage new donors to join and existing to continue
            to give blood.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-3">
          {stepInfo.map((singleStep) => (
            <DonationProcessCard key={singleStep.id} singleStep={singleStep} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationProcess;
