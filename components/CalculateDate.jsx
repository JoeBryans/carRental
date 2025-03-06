"use client";
import { differenceInDays } from "date-fns";
import React from "react";
import Currency from "./Currency";
import { useSelector } from "react-redux";

const CalculateDate = ({ price }) => {
  const daysDiff = useSelector((state) => state.car.search);
  console.log(daysDiff);
  const { checkin, checkout } = daysDiff;
  const firstDate = new Date(checkin);
  const secondDate = new Date(checkout);

  const deferDays = differenceInDays(secondDate, firstDate);
  console.log(deferDays);
  const totalAmout = price * deferDays;
  return (
    <div className="text-muted-foreground text-sm flex">
      <Currency price={totalAmout} /> / {`${deferDays} days`}
    </div>
  );
};
export default CalculateDate;
