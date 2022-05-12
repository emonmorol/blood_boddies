import React from "react";
import appointment from "../../../Images/appointment.png";
import { useForm } from "react-hook-form";

const ReqAppointmentForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div class="hero bg-white max-w-7xl mx-auto py-20">
        <div class="flex justify-center items-center flex-col lg:flex-row-reverse">
          <div class="w-1/2 rounded-3xl shadow-lg overflow-hidden">
            <h2 className="bg-primary text-white font-bold text-3xl text-center py-6 uppercase">
              Request Appointment
            </h2>
            <div className="p-10">
              <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center mb-5 items-center gap-5 w-full">
                  <div class=" w-full">
                    <label class="label">
                      <span class="label-text">Your Name</span>
                    </label>
                    <input
                      {...register("name", {
                        required: true,
                      })}
                      type="text"
                      placeholder="Name"
                      class="input input-bordered w-full"
                    />
                    {/* <label class="label">
                    <span class="label-text-alt">Alt label</span>
                  </label> */}
                  </div>
                  <div class=" w-full">
                    <label class="label">
                      <span class="label-text">Your Email</span>
                    </label>
                    <input
                      {...register("email", {
                        required: true,
                      })}
                      type="email"
                      placeholder="Type here"
                      class="input input-bordered w-full"
                    />
                    {/* <label class="label">
                    <span class="label-text-alt">Alt label</span>
                  </label> */}
                  </div>
                </div>
                <div className="flex justify-center mb-5 items-center gap-5 w-full">
                  <div class=" w-full">
                    <label class="label">
                      <span class="label-text">Donation Time</span>
                    </label>
                    <input
                      {...register("time", {
                        required: true,
                      })}
                      type="text"
                      placeholder="Donation Time"
                      class="input input-bordered w-full"
                    />
                    {/* <label class="label">
                    <span class="label-text-alt">Alt label</span>
                  </label> */}
                  </div>
                  <div class=" w-full">
                    <label class="label">
                      <span class="label-text">Contact Number</span>
                    </label>
                    <input
                      {...register("phone", {
                        required: true,
                      })}
                      type="number"
                      placeholder="Contact Number"
                      class="input input-bordered w-full"
                    />
                    {/* <label class="label">
                    <span class="label-text-alt">Alt label</span>
                  </label> */}
                  </div>
                </div>
                <div className="flex justify-center mb-5 items-center gap-5 w-full">
                  <div class=" w-full">
                    <label class="label">
                      <span class="label-text">Donation Center</span>
                    </label>
                    <input
                      {...register("center", {
                        required: true,
                      })}
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered w-full"
                    />
                    {/* <label class="label">
                    <span class="label-text-alt">Alt label</span>
                  </label> */}
                  </div>
                  <div class=" w-full">
                    <label class="label">
                      <span class="label-text">Donation Date</span>
                    </label>
                    <input
                      {...register("date", {
                        required: true,
                      })}
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered w-full"
                    />
                    {/* <label class="label">
                    <span class="label-text-alt">Alt label</span>
                  </label> */}
                  </div>
                </div>
                <div class="form-control mb-5 w-full">
                  <label class="label">
                    <span class="label-text">Share Your Thought</span>
                  </label>
                  <textarea
                    class="textarea textarea-bordered h-24"
                    placeholder="Type Here"
                  ></textarea>
                  {/* <label class="label">
                  <span class="label-text-alt">Your bio</span>
                </label> */}
                </div>

                <input className="btn" type="submit" />
              </form>
            </div>
          </div>
          <figure className="w-1/2">
            <img src={appointment} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ReqAppointmentForm;
