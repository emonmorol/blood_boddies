import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <section className="w-full min-h-[80vh] flex justify-center items-center">
      <div class="spinner">
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Spinner;
