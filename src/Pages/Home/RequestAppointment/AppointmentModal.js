import React from "react";
import AppointmentForm from "../ReqAppointmentForm/AppointmentForm";

const AppointmentModal = () => {
  return (
    <div>
      <input type="checkbox" id="appointment-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="w-[60%] bg-white max-w-3xl p-0 rounded-3xl relative">
          <label
            for="appointment-modal"
            class="btn btn-sm btn-circle btn-outline border absolute right-5 top-5 text-white font-bold"
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
