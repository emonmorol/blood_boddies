import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Social = () => {
  //creating user
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let errorMessage;
  if (error) {
    errorMessage = (
      <span className="text-center text-error">{error?.message}</span>
    );
  }
  if (loading) {
    return <p className="text-center my-20 text-medium">Loading...</p>;
  }

  // console.log(user);

  return (
    <>
      <div class="divider">OR</div>
      {errorMessage}
      <button
        onClick={() => signInWithGoogle()}
        class="btn rounded-full text-white w-full"
      >
        <i class="fa-brands fa-google mr-2"></i>Continue With Google
      </button>
      {/* <button class="btn rounded-full text-white w-full">
        <i class="fa-brands fa-github mr-2"></i>Continue With Github
      </button>
      <button class="btn rounded-full text-white w-full">
        <i class="fa-brands fa-facebook-f mr-2"></i>Continue With Facebook
      </button> */}
    </>
  );
};

export default Social;
