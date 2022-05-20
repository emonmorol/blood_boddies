import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import baseAxios from "../../Api/instance";
import swal from "sweetalert";

const CheckoutForm = ({ appointInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

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

    setProcessing(true);

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

    console.log(paymentIntent);
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      if (transactionId) {
        swal(
          "Payment Successful",
          `Your Transaction Id Is ${transactionId}`,
          "success"
        );
      }
      console.log(transactionId);

      const payment = {
        appointmentId: appointInfo._id,
        transactionId: paymentIntent.id,
      };

      const { data } = await baseAxios.put(
        `/appointments/${appointInfo._id}`,
        payment
      );
      if (data) {
        setProcessing(false);
        console.log(data);
      }
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
        className={`btn btn-accent mt-10 w-full text-white font-bold uppercase ${
          processing && "loading"
        }`}
        disabled={!stripe || !elements || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
