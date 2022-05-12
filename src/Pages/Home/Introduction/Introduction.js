import React from "react";
import blood from "../../../Images/blood.jpg";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className=" max-w-7xl mx-auto my-20">
      <div class="card lg:card-side bg-gray-100 shadow-xl">
        <div class="card-body justify-center flex-1">
          <h2 class="text-4xl font-semibold text-gray-600">Who We Are?</h2>
          <hr className="border w-[10%] my-3 border-primary" />
          <span>
            Blood Buddies is for public donation center with blood donation
            members in the changing health care system.
          </span>
          <div className="leading-10">
            <p className="intro-point">
              <BeenhereIcon className="mr-2 intro-icon" />{" "}
              <span>Specialist blood donors and clinical supervision.</span>
            </p>
            <p className="intro-point">
              <BeenhereIcon className="mr-2 intro-icon" />{" "}
              <span>Increasing communication with our members.</span>
            </p>
            <p className="intro-point">
              <BeenhereIcon className="mr-2 intro-icon" />{" "}
              <span>High quality assessment, diagnosis and treatment.</span>
            </p>
            <p className="intro-point">
              <BeenhereIcon className="mr-2 intro-icon" />{" "}
              <span>Examine critically to ensure alignment.</span>
            </p>
            <p className="intro-point">
              <BeenhereIcon className="mr-2 intro-icon" />{" "}
              <span>he extra care of a multi-disciplinary team.</span>
            </p>
          </div>
        </div>
        <figure className="flex-1">
          <img src={blood} alt="Album" />
        </figure>
      </div>
    </div>
  );
};

export default Introduction;
