import React from "react";
import Banner from "../Banner/Banner";
import DonarView from "../DonarView/DonarView";
import Introduction from "../Introduction/Introduction";
import RequestAppointment from "../RequestAppointment/RequestAppointment";

const Home = () => {
  return (
    <>
      <Banner />
      <RequestAppointment />
      <Introduction />
      <DonarView />
    </>
  );
};

export default Home;
