import { differenceInDays } from "date-fns";
import React, { useState } from "react";
import Currency from "./Currency";

const CalculateDate = ({ date1, date2, price }) => {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

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
