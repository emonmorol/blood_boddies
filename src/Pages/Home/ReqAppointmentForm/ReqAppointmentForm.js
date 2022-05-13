import React from "react";
import appointment from "../../../Images/appointment.png";
import AppointmentForm from "./AppointmentForm";

const ReqAppointmentForm = () => {
  return (
    <div>
      <div class="hero bg-white max-w-7xl mx-auto py-20">
        <div class="flex justify-center items-center flex-col lg:flex-row-reverse px-3">
          <AppointmentForm width={"w-1/2"} />
          <figure className="hidden md:hidden lg:block w-1/2">
            <img src={appointment} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ReqAppointmentForm;
