import React from "react";
import Banner from "../Banner/Banner";
import Campaigns from "../Campaigns/Campaigns";
import DonarView from "../DonarView/DonarView";
import DonationProcess from "../DonationProcess/DonationProcess";
import Introduction from "../Introduction/Introduction";
import RequestAppointment from "../RequestAppointment/RequestAppointment";

const Home = () => {
  return (
    <>
      <Banner />
      <RequestAppointment />
      <Introduction />
      <DonarView />
      <Campaigns />
      {/* <DonationProcess /> */}
    </>
  );
};

export default Home;
