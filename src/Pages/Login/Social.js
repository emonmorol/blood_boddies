import React, { useEffect } from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import baseAxios from "../../Api/instance";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";

const Social = () => {
  //creating user
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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
    return <Spinner />;
  }

  return (
    <>
      <div className="divider">OR</div>
      {errorMessage}
      <button
        onClick={() => signInWithGoogle()}
        className="btn rounded-full text-white w-full"
      >
        <i className="fa-brands fa-google mr-2"></i>Continue With Google
      </button>
      {/* <button className="btn rounded-full text-white w-full">
        <i className="fa-brands fa-github mr-2"></i>Continue With Github
      </button>
      <button className="btn rounded-full text-white w-full">
        <i className="fa-brands fa-facebook-f mr-2"></i>Continue With Facebook
      </button> */}
    </>
  );
};

export default Social;
