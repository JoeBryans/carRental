"use client";
import {
  ArrowBigDownDash,
  ArrowBigRight,
  Calendar,
  CalendarRange,
  Copy,
  FuelIcon,
  Settings,
  Users2,
} from "lucide-react";

import { Button } from "../../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Reserve from "./Reserve";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { SearchBar } from "../../../hooks/store/slice";
export function ReserveButton({ id }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");
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
  console.log(location, end, start);

  const handClick = async (id) => {
    const res = await fetch(`http://localhost:3000/api/car/${id}`);
    const data = await res.json();
    setData(data);
  };
  const {
    image,
    name,
    brand,
    cylinders,
    doors,
    seats,
    engine,
    features,
    gearbox,
    mileage,
    model,
    petrol,
    transmission,
    userId,
    year,
    updateAt,
    price,
  } = data;

  const handleReseve = (e) => {
    e.preventDefault();

    dispatch(
      SearchBar({
        checkin: start,
        checkout: end,
        place: location,
      })
    );
    router.push(`/reserve/${data.id}`);
    // <Link href={`/reserve/${id}`} />;
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div>
          <span
            className="btn font-semibold text-xl w-max mt-2 bg-indigo-700 text-primary-foreground shadow hover:bg-accent hover:text-indigo-700"
            onClick={() => handClick(id)}
          >
            Rent
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[50rem] w-[90%] ">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        {data ? (
          <>
            <div className="flex flex-col gap-5 space-x-2 overflow-y-scroll h-[80vh]">
              <div className="grid grid-cols-1 md:grid-cols-3  gap-4  p-2 w-full ">
                <div className="w-52 max-h-48 ">
                  <Image
                    src={image}
                    alt={name}
                    width={800}
                    height={800}
                    className="w-[100%] max-h-[100%]"
                  />
                </div>
                <div className=" col-span-2 ">
                  <h2 className="text-xl font-bold my-4 ">{name}</h2>
                  <div className="flex flex-col gap-2">
                    <span className=" ">brand : {brand}</span>
                    <span className=" ">model : {model}</span>
                    <span className=" ">engine : {engine}</span>
                    <span className=" ">transmission : {transmission}</span>
                  </div>
                  <div className="flex md:flex-row flex-col gap-4  md:justify-between w-full">
                    <div className="grid grid-cols-2 w-full  gap-4">
                      <span className="flex items-center gap-1">
                        <Users2 /> {`${seats} seat`}
                      </span>
                      <span className="flex items-center gap-1">
                        <img src="/car.png" alt="car" className="w-4 h-4" />
                        {`${doors} `}
                      </span>
                      <span className="flex items-center gap-1">
                        <FuelIcon /> {`${petrol}`}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarRange /> {`${year}`}
                      </span>
                      <span className="flex items-center gap-1">
                        <Settings /> {`${gearbox} `}
                      </span>
                      <span className="flex items-center gap-1">{`${mileage}`}</span>
                    </div>
                    <div className="md:text-right text-left min-w-28">
                      <article>
                        <span>${price} per day</span>
                        {/* <span>${price}  day</span> */}
                      </article>
                    </div>
                  </div>
                  <span
                    onClick={() => setShow(!show)}
                    className="flex gap-1 cursor-pointer items-center mt-2 text-green-600"
                  >
                    See more
                  </span>
                </div>
              </div>
              {/* features */}
              {show ? (
                <div className="shadow-lg w-full rounded-lg py-3 px-5">
                  {features.map((items, i) => {
                    return (
                      <ul className=" list-disc mx-3" key={i}>
                        <li className="-">{items}</li>
                      </ul>
                    );
                  })}
                </div>
              ) : null}

              {/* form for booking */}
              <div className="w-full ">
                <div className="w-full flex justify-center relative ">
                  <form className="max-w-[600px] w-[95%] border rounded-lg flex flex-col gap-4 px-3 py-3">
                    <span>Bookin Form</span>
                    <DialogDescription>please file the form</DialogDescription>
                    <Label className="w-full  flex flex-col gap-4">
                      <span> Pickup location</span>
                      <Input
                        placeholder="location"
                        value={location}
                        type="text"
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </Label>
                    <Label
                      onClick={() => setOpen(!open)}
                      className="w-full border rounded-lg flex flex-col gap-4 p-3"
                    >
                      <span className="flex items-center gap-2">
                        <Calendar onClick={() => setOpen(!open)} />
                        Pickup and Drop off date should be select in a range
                      </span>
                      <span>
                        {" "}
                        {[`Pickup: ${start} ${""}  Drop off: ${end}`]}
                      </span>
                    </Label>

                    <div className="w-full text-right">
                      {/* <Reserve item={data} /> */}
                      <Button
                        variant="primary"
                        className="w-max "
                        onClick={handleReseve}
                      >
                        Reserve
                      </Button>
                    </div>
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
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <div className="w-full flex items-center justify-around">
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </div>
              </DialogClose>
            </DialogFooter>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
