import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import signup from "../../Images/register.jpg";
import Social from "./Social";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
  };

  let errorMessage;
  if (error) {
    errorMessage = (
      <span className="text-center text-error">{error?.message}</span>
    );
  }
  if (loading) {
    return <p className="text-center my-20 text-medium">Loading...</p>;
  }

  console.log(user);

  return (
    <div className="h-[100vh] bg-login-bg bg-fixed">
      <div class="card card-side bg-base-100 border max-w-7xl mx-auto my-10">
        <figure className="w-3/5">
          <img src={signup} alt="Movie" />
        </figure>
        <div class="w-2/5 card-body flex justify-center flex-col items-center gap-5">
          <h2 class="card-title text-3xl uppercase font-bold text-primary">
            Create Account
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center w-full"
          >
            <input
              type="text"
              placeholder="Name Here"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name Is required",
                },
              })}
              class="input input-bordered w-full"
            />
            <small className="text-error mb-6 mt-1 ml-2">
              {errors.name && errors.name.message}
            </small>

            <input
              type="email"
              placeholder="Email Here"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email Is required",
                },
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Provide Valid Email",
                },
              })}
              class="input input-bordered w-full"
            />
            <small className="text-error mb-6 mt-1 ml-2">
              {errors.email && errors.email.message}
            </small>

            <input
              type="password"
              placeholder="Password here"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password Is required",
                },
                minLength: {
                  value: 6,
                  message: "Password Length Minimum 6 character",
                },
              })}
              class="input input-bordered w-full"
            />
            <small className="text-error mb-6 mt-1 ml-2">
              {errors.password && errors.password.message}
            </small>

            {errorMessage}
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
