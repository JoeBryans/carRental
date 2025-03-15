// stripe
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();
  const {
    price,
    userId,
    brand,
    model,
    engine,
    transmission,
    seats,
    gearbox,
    mileage,
    petrol,
    year,
    name,
    image,
    paymentIntent,
  } = body;
  console.log(body);

  try {
    const paymentIntents = await stripe.paymentIntents.create({
      amount: body.price * 100,
      currency: "usd",
      automatic_payment_methods: { enabled: true },

      //   payment_method_types: ["card"],
      // metadata: {
      //   order_id: req.body.order_id,
      //   user_id: req.body.user_id,
      // },
    });
    console.log(paymentIntents);
    console.log(paymentIntents.client_secret);

    return NextResponse.json({ clientSecret: paymentIntents.client_secret });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
