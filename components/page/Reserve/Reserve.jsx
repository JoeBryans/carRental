"use client";
import { Button } from "@/components/ui/button";
import { reserve } from "@/hooks/store/slice";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Reserve = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  console.log("reserve :", item);

  const handleReserve = async (item) => {
    dispatch(reserve(item));
    const res = await fetch(`http://localhost:3000/api/reserve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: item.price,
        // userId: item.userId,
        brand: item.brand,
        model: item.model,
        engine: item.engine,
        transmission: item.transmission,
        seats: item.seats,
        gearbox: item.gearbox,
        mileage: item.mileage,
        petrol: item.petrol,
        year: item.year,
        name: item.name,
        image: item.image,
      }),
      //   redirect:false,
    });
    const { clientSecret } = await res.json();
    localStorage.setItem("clientSecret", clientSecret);
    console.log(clientSecret);
    router.push(`/payment`);
    // console.log(res);
  };

  return (
    <div>
      <Button
        type="button"
        variant="primary"
        onClick={() => handleReserve(item)}
      >
        Reserve
      </Button>
    </div>
  );
};

export default Reserve;
