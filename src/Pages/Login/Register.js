import React, { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import baseAxios from "../../Api/instance";
import auth from "../../firebase.init";
import signup from "../../Images/register.jpg";
import Social from "./Social";
import { toast } from "react-toastify";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      (async () => {
        const { data } = await baseAxios.put("/user", {
          email: user.user.email,
        });
        if (data.result.upsertedId) {
          toast.success("User Created Successfully");
        }
        if (data?.token) {
          localStorage.setItem("accessJwtToken", data?.token);
        }
        data;
      })();

      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  let errorMessage;
  if (error) {
    errorMessage = (
      <span className="text-center text-error">{error?.message}</span>
    );
  }
  if (loading) {
    return <p className="text-center my-20 text-medium">Loading...</p>;
  }

  return (
    <div className="h-[100vh] bg-login-bg bg-fixed">
      <div className="card card-side bg-base-100 border max-w-7xl mx-auto my-10">
        <figure className="w-3/5">
          <img src={signup} alt="Movie" />
        </figure>
        <div className="w-2/5 card-body flex justify-center flex-col items-center gap-5">
          <h2 className="card-title text-3xl uppercase font-bold text-primary">
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
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
            />
            <small className="text-error mb-6 mt-1 ml-2">
              {errors.password && errors.password.message}
            </small>

            {errorMessage}
            <button
              type="submit"
              className="input input-bordered rounded-full bg-primary text-white font-bold uppercase mx-auto w-full mb-6"
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
