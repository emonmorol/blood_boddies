import React from "react";
import blood from "../../../Images/blood.jpg";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-3">
      <div className="card lg:card-side bg-gray-100 shadow-xl">
        <div className="card-body justify-center flex-1">
          <h2 className="text-4xl font-semibold text-gray-600">Who We Are?</h2>
          <hr className="border w-[10%] my-3 border-primary" />
          <span>
            Blood Buddies is for public donation center with blood donation
            members in the changing health care system.
          </span>
          <div className="leading-10">
            <p className="intro-point mb-2 text-sm  md:text-base lg:text-base">
              <BeenhereIcon className="mr-2 intro-icon" />{" "}
              <span>Specialist blood donors and clinical supervision.</span>
            </p>
            <p className="intro-point mb-2 text-sm  md:text-base lg:text-base">
              <BeenhereIcon className="mr-2 intro-icon" />{" "}
              <span>Increasing communication with our members.</span>
            </p>
            <p className="intro-point mb-2 text-sm  md:text-base lg:text-base">
              <BeenhereIcon className="mr-2 intro-icon" />{" "}
              <span>High quality assessment, diagnosis and treatment.</span>
            </p>
            <p className="intro-point mb-2 text-sm  md:text-base lg:text-base">
              <BeenhereIcon className="mr-2 intro-icon" />{" "}
              <span>Examine critically to ensure alignment.</span>
            </p>
            <p className="intro-point mb-2 text-sm  md:text-base lg:text-base">
              <BeenhereIcon className="mr-2 intro-icon" />{" "}
              <span>he extra care of a multi-disciplinary team.</span>
            </p>
          </div>
        </div>
        <figure className="flex-1 w-full">
          <img className="w-full" src={blood} alt="Album" />
        </figure>
      </div>
    </div>
  );
};

export default Introduction;
