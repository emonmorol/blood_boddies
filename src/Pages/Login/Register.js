import React from "react";
import { Link } from "react-router-dom";
import register from "../../Images/register.jpg";
import Social from "./Social";

const Register = () => {
  return (
    <div className="h-[100vh] bg-login-bg bg-fixed">
      <div class="card card-side bg-base-100 border max-w-7xl mx-auto my-10">
        <figure className="w-3/5">
          <img src={register} alt="Movie" />
        </figure>
        <div class="w-2/5 card-body flex justify-center flex-col items-center gap-5">
          <h2 class="card-title text-3xl uppercase font-bold text-primary">
            Create Account
          </h2>
          <form className="flex flex-col justify-center w-full">
            <input
              type="text"
              placeholder="Name Here"
              class="input input-bordered w-full mb-6"
            />
            <input
              type="email"
              placeholder="Email Here"
              class="input input-bordered w-full mb-6"
            />
            <input
              type="password"
              placeholder="Password here"
              class="input input-bordered w-full mb-6"
            />
            <button
              type="submit"
              class="input input-bordered rounded-full bg-primary text-white font-bold uppercase mx-auto w-full mb-6"
            >
              Register
            </button>
            <div className="mt-2 flex justify-center">
              <Link to="/login">
                <small className="text-red-400 font-semibold">
                  Already have An Account ?
                </small>
              </Link>
            </div>
          </form>

          <Social />
        </div>
      </div>
    </div>
  );
};

export default Register;
