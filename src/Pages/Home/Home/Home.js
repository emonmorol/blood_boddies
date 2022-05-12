import React from "react";
import Banner from "../Banner/Banner";
import BeVolunteer from "../BeVolunteer/BeVolunteer";
import Campaigns from "../Campaigns/Campaigns";
import Counter from "../Counter/Counter";
import DonarView from "../DonarView/DonarView";
import DonationProcess from "../DonationProcess/DonationProcess";
import Introduction from "../Introduction/Introduction";
import ReqAppointmentForm from "../ReqAppointmentForm/ReqAppointmentForm";
import RequestAppointment from "../RequestAppointment/RequestAppointment";
import Sponsors from "../Sponsors/Sponsors";
import Volunteers from "../Volunteers/Volunteers";

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
      <ReqAppointmentForm />
      <Volunteers />
      <BeVolunteer />
      <Sponsors />
    </>
  );
};

export default Home;
