import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import swal from "sweetalert";
import baseAxios from "../../../Api/instance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AppointmentForm = ({ width }) => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [newDate, setNewDate] = useState(new Date());
  let formattedDate = format(newDate, "PP");

  const handleDateChange = (date) => {
    setNewDate(date);
  };

  const onSubmit = (reqAppoint) => {
    const newAppointment = {
      ...reqAppoint,
      date: formattedDate,
      email: user?.email,
    };
    console.log(newAppointment);
    if (user) {
      (async () => {
        const { data } = await baseAxios.post(
          `/appointments?email=${user?.email}&date=${formattedDate}`,
          newAppointment
        );
        console.log(data);
        if (data?.success) {
          toast.success("SuccessFully Submitted");
          reset();
        }
        if (!data?.success) {
          toast.error(`You've Already Have an Appointment on ${formattedDate}`);
        }
      })();
    } else {
      swal("Sorry!", "You Have To Be Logged In To Proceed", "error");
      navigate("/login");
    }
  };

  return (
    <>
      <div class={`w-full lg:${width} rounded-3xl shadow-lg overflow-hidden`}>
        <h2 className="bg-primary text-white font-bold text-3xl text-center py-6 uppercase">
          Request Appointment
        </h2>
        <div className="p-10">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div class=" w-full relative">
              <label class="label">
                <span class="label-text">Your Name</span>
              </label>
              <input
                {...register("name", {
                  required: "This Field Is Required",
                  minLength: {
                    value: 4,
                    message: "Minimum Four Character",
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

            {/* <div class=" w-full relative">
              <label class="label">
                <span class="label-text">Your Email</span>
              </label>
              <input
                {...register("email", {
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please Input A Valid Email",
                  },
                })}
                type="email"
                value={user?.email}
                disabled
                placeholder="Type here"
                class="input input-bordered w-full"
              />
              {errors?.email && (
                <span class="error label-text-alt">
                  {" "}
                  {errors?.email?.message}
                </span>
              )}
            </div> */}

            <div class="w-full relative">
              <label class="label">
                <span class="label-text">Donation Date</span>
              </label>
              <DatePicker
                className="rounded-lg w-full"
                selected={newDate}
                onChange={handleDateChange}
              />
              {/* <input
                  {...register("date", {
                    required: "This Field Is Required",
                  })}
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full hidden"
                />
                {errors?.date && (
                  <span class="error label-text-alt">
                    {" "}
                    {errors?.date?.message}
                  </span>
                )} */}
            </div>

            <div class="w-full relative">
              <label class="label">
                <span class="label-text">Contact Number</span>
              </label>
              <input
                {...register("phone", {
                  required: "This Field Is Required",
                  minLength: {
                    value: 11,
                    message: "Please Input A Valid Phone Number",
                  },
                  maxLength: {
                    value: 11,
                    message: "Please Input A Valid Phone Number",
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
    </>
  );
};

export default AppointmentForm;
