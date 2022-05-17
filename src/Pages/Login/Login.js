import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import login from "../../Images/login.jpg";
import Social from "./Social";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
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
      <div class="card card-side bg-base-100 border max-w-7xl mx-auto my-10">
        <figure className="w-3/5">
          <img src={login} alt="Movie" />
        </figure>
        <div class="w-2/5 card-body flex justify-center flex-col items-center gap-5">
          <h2 class="card-title text-3xl uppercase font-bold text-primary">
            Login
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center w-full"
          >
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
              Login
            </button>
            <div className="mt-2 flex justify-between">
              <small className="text-blue-400 font-semibold cursor-pointer">
                Forget Password ?
              </small>
              <Link to="/register">
                <small className="text-blue-400 font-semibold">
                  New To Blood Buddies ?
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

export default Login;
