import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import baseAxios from "../../Api/instance";

const CheckoutForm = ({ appointInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transectionId, setTransectionId] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await baseAxios.post("/create-payment-intent", {
        price: 5,
      });
      if (data?.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    })();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error?.message);
    } else {
      setCardError("");
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: appointInfo.name,
            email: appointInfo.email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setSuccess("");
      setProcessing(false);
    } else {
      setCardError("");
      setTransectionId(paymentIntent.id);
      setSuccess("Congrats! Your Payment Is completed");

      const payment = {
        appointmentId: appointInfo._id,
        transactionId: paymentIntent.id,
      };
    }
  };

  return (
    <form className="bg-white p-5 pt-10 rounded-2xl" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "20px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {cardError && (
        <p className="mt-5 -mb-5 text-red-600 text-center">{cardError}</p>
      )}
      <button
        type="submit"
        className="btn btn-accent mt-10 w-full text-white font-bold uppercase"
        disabled={!stripe || !elements || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
