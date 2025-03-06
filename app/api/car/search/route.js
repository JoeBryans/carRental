import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  //   try {
  // const q = req;
  const url = new URL(req.url);
  const urlParams = new URLSearchParams(url.searchParams);
  const brand = urlParams.get("brand");
  const transmission = urlParams.get("transmission");
  const petrol = urlParams.get("petrol");
  const seats = urlParams.get("seats");
  const location = urlParams.get("location");
  const min = urlParams.get("min");
  const max = urlParams.get("max");
  const seat = parseFloat(seats);
  const minimum = parseFloat(min) || 0;
  const maximum = parseFloat(max) || 0;
  // const minPrice = minimum >=;
  //   const maximum = parseInt(max) || 0;

  const filter = {
    transmission: transmission || "",
    brand: brand || "",
    petrol: petrol || "",
    seats: seat || 0,
    location: location || "",
    minPrice: minimum || 0,
    maxPrice: maximum || 0,
  };
  console.log(filter);
  let priceFilter = {};
  if (minimum && maximum) {
    priceFilter = {
      price: {
        gte: minimum,
        lte: maximum,
      },
    };
  } else if (minimum) {
    priceFilter = {
      price: {
        gte: minimum,
      },
    };
  } else if (maximum) {
    priceFilter = {
      price: {
        lte: maximum,
      },
    };
  }
  console.log(priceFilter);

  try {
    const car = await db.car.findMany({
      where: {
        OR: [
          { brand: filter.brand },
          { transmission: filter.transmission },
          { petrol: filter.petrol },
          { seats: filter.seats },
          priceFilter,
          //   { location: filter.location },
        ],
      },
      orderBy: [
        {
          createdAt: "desc",
        },
        {
          price: "desc",
        },
        {
          seats: "desc",
        },
      ],
    });
    return NextResponse.json(car);
  } catch (error) {
    return NextResponse.json(error);
  }
}
