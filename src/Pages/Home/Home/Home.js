import React from "react";
import Banner from "../Banner/Banner";
import Introduction from "../Introduction/Introduction";
import RequestAppointment from "../RequestAppointment/RequestAppointment";

const Home = () => {
  return (
    <>
      <Banner />
      <RequestAppointment />
      <Introduction />
    </>
  );
};

export default Home;
