import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import baseAxios from "../../Api/instance";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0gEKK0fW8edCbt7kDLXbv8KWlGZciN9TnJpYpZhYFoNsDPH1xDnBZ0nnu7dBaYTEA0dg57jSrnXA8kZBMoIahj00YRVMq95j"
);

const Payment = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["payment", id], () =>
    baseAxios.get(`/appointments/${id}`)
  );
  if (isLoading) {
    return <p>loading ...</p>;
  }
  data;
  return (
    <section className="mx-auto w-full lg:w-1/2 border-2 p-4 lg:p-10 rounded-2xl shadow-xl">
      <div className="flex flex-col w-full gap-5">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-gray-600 uppercase text-center">
            pay to proceed
          </h2>
          <hr className="border w-[10%] my-3 border-primary  mx-auto" />
        </div>
        <span className="bg-white px-5 py-3 text-lg font-medium rounded-lg">
          {data.data.name}
        </span>
        <span className="bg-white px-5 py-3 text-lg font-medium rounded-lg">
          {data.data.email}
        </span>
        <span className="bg-white px-5 py-3 text-lg font-medium rounded-lg">
          Date: {data.data.date}
        </span>
        <span className="bg-white px-5 py-3 text-lg font-medium rounded-lg">
          {data.data.center}
        </span>
        <span className="bg-white px-5 py-3 text-lg font-medium rounded-lg">
          Blood Group : {data.data.bloodGroup}
        </span>
        <span className="bg-red-400 text-white px-5 py-3 text-lg font-medium rounded-lg">
          Pay <span className="text-2xl"> $5 </span> for service Charge
        </span>

        <Elements stripe={stripePromise}>
          <CheckoutForm appointInfo={data.data} />
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
