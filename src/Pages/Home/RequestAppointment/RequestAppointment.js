import React, { useState } from "react";
import AppointmentModal from "./AppointmentModal";

const RequestAppointment = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-gray-100 py-10">
      <div className="flex justify-center items-center flex-col md:flex-col lg:flex-row max-w-7xl mx-auto gap-8 px-10 md:px-8 lg:px-10">
        <div className="w-full lg:w-2/3">
          <h2 className="text-4xl font-medium ">
            We are helping people from 40 years
          </h2>
          <hr className="border w-[3rem] my-3 border-primary" />
          <p>
            You can give blood at any of our blood donation venues all over the
            world. We have total sixty thousands donor centers and visit
            thousands of other venues on various occasions.
          </p>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/3">
          <label
            htmlFor="appointment-modal"
            onClick={() => setOpenModal(true)}
            className="btn text-lg bg-primary rounded-none border-4 border-primary font-semibold uppercase text-white px-6 hover:text-black hover:bg-transparent transition-all duration-300"
          >
            Request Appointment
          </label>
        </div>
        {openModal && <AppointmentModal />}
      </div>
    </div>
  );
};

export default RequestAppointment;
