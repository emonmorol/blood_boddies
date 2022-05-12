import React from "react";
import appointment from "../../../Images/appointment.png";
import { useForm } from "react-hook-form";

const ReqAppointmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.dir(errors);
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div class="hero bg-white max-w-7xl mx-auto py-20">
        <div class="flex justify-center items-center flex-col lg:flex-row-reverse px-3">
          <div class="w-full lg:w-1/2 rounded-3xl shadow-lg overflow-hidden">
            <h2 className="bg-primary text-white font-bold text-3xl text-center py-6 uppercase">
              Request Appointment
            </h2>
            <div className="p-10">
              <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center mb-5 items-center gap-5 w-full">
                  <div class=" w-full relative">
                    <label class="label">
                      <span class="label-text">Your Name</span>
                    </label>
                    <input
                      {...register("name", {
                        required: "This Field Is Required",
                        minLength: {
                          value: 4,
                          message: "Minimum Four Character", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                      type="text"
                      placeholder="Name"
                      class="input input-bordered w-full"
                    />
                    {errors?.name && (
                      <span class="error label-text-alt">
                        {" "}
                        {errors?.name?.message}
                      </span>
                    )}
                  </div>

                  <div class=" w-full relative">
                    <label class="label">
                      <span class="label-text">Your Email</span>
                    </label>
                    <input
                      {...register("email", {
                        required: "This Field Is Required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Please Input A Valid Email", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                      type="email"
                      placeholder="Type here"
                      class="input input-bordered w-full"
                    />
                    {errors?.email && (
                      <span class="error label-text-alt">
                        {" "}
                        {errors?.email?.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-center mb-5 items-center gap-5 w-full">
                  <div class=" w-full relative">
                    <label class="label">
                      <span class="label-text">Donation Time</span>
                    </label>
                    <input
                      {...register("time", {
                        required: "This Field Is Required",
                      })}
                      type="text"
                      placeholder="Donation Time"
                      class="input input-bordered w-full"
                    />
                    {errors?.time && (
                      <span class="error label-text-alt">
                        {" "}
                        {errors?.time?.message}
                      </span>
                    )}
                  </div>

                  <div class=" w-full relative">
                    <label class="label">
                      <span class="label-text">Contact Number</span>
                    </label>
                    <input
                      {...register("phone", {
                        required: "This Field Is Required",
                        minLength: {
                          value: 11,
                          message: "Please Input A Valid Phone Number", // JS only: <p>error message</p> TS only support string
                        },
                        maxLength: {
                          value: 11,
                          message: "Please Input A Valid Phone Number", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                      type="number"
                      placeholder="Contact Number"
                      class="input input-bordered w-full"
                    />
                    {errors?.phone && (
                      <span class="error label-text-alt">
                        {" "}
                        {errors?.phone?.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-center mb-5 items-center gap-5 w-full">
                  <div class=" w-full relative">
                    <label class="label">
                      <span class="label-text">Donation Center</span>
                    </label>
                    <input
                      {...register("center", {
                        required: "This Field Is Required",
                      })}
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered w-full"
                    />
                    {errors?.center && (
                      <span class="error label-text-alt">
                        {" "}
                        {errors?.center?.message}
                      </span>
                    )}
                  </div>

                  <div class=" w-full relative">
                    <label class="label">
                      <span class="label-text">Donation Date</span>
                    </label>
                    <input
                      {...register("date", {
                        required: "This Field Is Required",
                      })}
                      type="text"
                      placeholder="Type here"
                      class="input input-bordered w-full"
                    />
                    {errors?.date && (
                      <span class="error label-text-alt">
                        {" "}
                        {errors?.date?.message}
                      </span>
                    )}
                  </div>
                </div>

                <div class="form-control mb-5 w-full">
                  <label class="label">
                    <span class="label-text">Share Your Thought</span>
                  </label>
                  <textarea
                    {...register("opinion", {
                      maxLength: {
                        value: 200,
                        message: "Please Input A Valid Phone Number",
                      },
                    })}
                    class="textarea textarea-bordered h-24"
                    placeholder="Type Here"
                  ></textarea>
                  {errors?.opinion && (
                    <span class="error label-text-alt">
                      {" "}
                      {errors?.opinion?.message}
                    </span>
                  )}
                </div>

                <input className="btn" type="submit" />
              </form>
            </div>
          </div>
          <figure className="hidden md:hidden lg:block w-1/2">
            <img src={appointment} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ReqAppointmentForm;
