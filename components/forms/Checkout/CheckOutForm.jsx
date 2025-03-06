import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  AddressElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect } from "react";

const CheckOutForm = ({ clientSecret }) => {
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
  return (
    <Container>
      <div>
        {clientSecret ? (
          <form className="max-w-[600px] w-[90%] flex flex-col gap-4 ">
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
              Pay now
            </Button>
          </form>
        ) : null}
      </div>
    </Container>
  );
};

export default CheckOutForm;
