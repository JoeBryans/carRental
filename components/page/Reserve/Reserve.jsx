"use client";
import { Button } from "../../ui/button";
import { reserve } from "../../../hooks/store/slice";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { c } from "framer-motion/dist/types.d-6pKw1mTI";

const Reserve = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  console.log("reserve :", item);

  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("clientSecret", serializedState);
    } catch (err) {
      // console.error(err);
    }
  };

  const handleReserve = async (item) => {
    dispatch(
      reserve({
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
      })
    );
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
    saveState(clientSecret);
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
