import React from "react";

const RequestAppointment = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="flex justify-center items-center  max-w-7xl mx-auto gap-8">
        <div className="w-2/3">
          <h2 className="text-4xl font-medium mb-6">
            We are helping people from 40 years
          </h2>
          <p>
            You can give blood at any of our blood donation venues all over the
            world. We have total sixty thousands donor centers and visit
            thousands of other venues on various occasions.
          </p>
        </div>
        <div className="w-1/3">
          <button className="text-2xl bg-primary border-4 border-primary font-semibold uppercase text-white px-6 py-3 hover:text-black hover:bg-transparent transition-all duration-300">
            Request Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestAppointment;
