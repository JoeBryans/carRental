"use client";
import React from "react";
import Container from "../Container";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// DateRange
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { Select } from "@react-three/drei";
import Category from "../page/Category";
import { useRouter, useSearchParams } from "next/navigation";
import { Calendar } from "lucide-react";

const Filter = () => {
  const router = useRouter();
  const search = useSearchParams();
  const [keyword, setKeyword] = useState("");
  const [price, setPrice] = useState("");
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const start = format(date.startDate, "MM-dd-yyyy");
  const end = format(date.endDate, "MM-dd-yyyy");
  const handleChange = (ranges) => {
    setDate(ranges.selection);
  };
  // URLSearchParams.s
  // const dates = search.set(date);
  // const location = search.set(keyword);
  // // const brand = search.set(brand)
  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(search);
    params.set("location", keyword);
    // params.set("brand", keyword);
    params.set("checkin", start);
    params.set("checkout", end);
    const filtal = params.toString();
    // search.toString(dates);
    // search.toString(location);
    router.push(`/search?${filtal}`);
    // console.log(keyword, price, startDate, endDate);
  };
  return (
    <div className="flex w-screen justify-center absolute lg:-top-16 -top-24 z-30">
      <Container>
        <div className="flex flex-col items-center justify-center w-full border-2 h-full rounded-lg ">
          <form className="max-w-full w-[100%] grid grid-cols-1 md:grid-cols-4">
            <Label className="flex items-center gap-1 ">
              {/* <span className="text-muted-foreground">keyword</span> */}
              <Input
                value={keyword}
                type="text"
                placeholder="location"
                onChange={(e) => setKeyword(e.target.value)}
              />
            </Label>
            <Label className="flex items-center gap-1 ">
              <Category />
            </Label>
            <Label className=" flex items-center gap-2 text-muted-foreground  px-2 border rounded-lg">
              <span className="text-muted-foreground">
                <Calendar onClick={() => setOpen(!open)} />
              </span>
              <span type="text" className="border-0 focus:border-0 ">
                {[`${start} to ${end}`]}
              </span>
            </Label>
            <Button
              onClick={handleSubmit}
              variant="primary"
              className="font-sem-bold  text-xl"
            >
              Search
            </Button>
          </form>
        </div>
        <div className="max-w-full w-[90%] flex justify-center ">
          {open ? (
            <DateRange
              ranges={[date]}
              onChange={handleChange}
              minDate={new Date()}
            />
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default Filter;
