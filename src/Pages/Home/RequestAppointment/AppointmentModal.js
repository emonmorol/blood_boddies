import React from "react";
import AppointmentForm from "../ReqAppointmentForm/AppointmentForm";

const AppointmentModal = () => {
  return (
    <div>
      <input type="checkbox" id="appointment-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box p-0 rounded-3xl">
          <label
            for="appointment-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
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
