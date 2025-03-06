"use client";
import Container from "../../Container";
import { Button } from "../../ui/button";
import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutForm = ({ clientSecret }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
  }, [stripe]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //   setIsLoading(true);
    try {
      if (!stripe || !elements) {
        return;
      }
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/success",
        },
      });
      if (!error) {
        console.log(error);
        // localStorage.removeItem("clientSecret");
        // setError(error.message);
      } else {
        // Show error to your customer
        console.log("error occured");
        // setError(error.message);
      }
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };
  return (
    <Container>
      <div>
        {clientSecret ? (
          <form
            className="max-w-[600px] w-[90%] flex flex-col gap-4 "
            onSubmit={handleSubmit}
          >
            <AddressElement
              options={{
                mode: "billing",

                addressFields: {
                  line1: {
                    required: true,
                  },
                  line2: {
                    required: false,
                  },
                  city: {
                    required: true,
                  },
                  state: {
                    required: true,
                  },
                  postalCode: {
                    required: true,
                  },
                  country: {
                    required: true,
                  },
                },
              }}
            />
            <PaymentElement options={{ layout: "accordion" }} />
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-full"
            >
              {isLoading ? <span>Loading ...</span> : <span>Pay now</span>}
            </Button>
          </form>
        ) : null}
      </div>
    </Container>
  );
};

export default CheckOutForm;
