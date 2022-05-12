import React from "react";
import Banner from "../Banner/Banner";
import Campaigns from "../Campaigns/Campaigns";
import Counter from "../Counter/Counter";
import DonarView from "../DonarView/DonarView";
import DonationProcess from "../DonationProcess/DonationProcess";
import Introduction from "../Introduction/Introduction";
import RequestAppointment from "../RequestAppointment/RequestAppointment";

const Home = () => {
  return (
    <>
      <Banner />
      <RequestAppointment />
      <Counter />
      <Introduction />
      <Campaigns />
      <DonarView />
      <DonationProcess />
    </>
  );
};

export default Home;
