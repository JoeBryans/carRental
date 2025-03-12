"use client";
import React, { useEffect, useState } from "react";
// strip loader
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Check } from "lucide-react";
import CheckOutForm from "../../components/forms/Checkout/CheckOutForm";
// import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const page = () => {
  const [clientSecret, setClientSecret] = useState("");
  if (typeof window !== "undefined") {
    const clientSecret = localStorage.getItem("clientSecret");
    setClientSecret(clientSecret);
  }
  // const clientSecret = localStorage.getItem("clientSecret");
  // console.log(clientSecret);

  return (
    <div>
      {clientSecret ? (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: {
              theme: "stripe",
              labels: "above",
            },
          }}
        >
          <CheckOutForm clientSecret={{ clientSecret }} />
        </Elements>
      ) : null}
    </div>
  );
};

export default page;
