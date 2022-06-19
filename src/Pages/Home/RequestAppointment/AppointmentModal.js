import React from "react";
import AppointmentForm from "../ReqAppointmentForm/AppointmentForm";

const AppointmentModal = () => {
  return (
    <div>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="w-[60%] bg-white max-w-3xl p-0 rounded-3xl relative">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle btn-outline border absolute right-5 top-5 text-white font-bold"
          >
            ✕
          </label>

          <AppointmentForm width={"w-full"} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
