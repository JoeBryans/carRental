"use client";
import {
  ArrowBigDownDash,
  ArrowBigRight,
  CalendarRange,
  Copy,
  FuelIcon,
  Settings,
  Users2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Reserve from "./Reserve";

export function ReserveButton({ id }) {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
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
            <div className="flex flex-col gap-5 space-x-2">
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
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <div className="w-full flex items-center justify-around">
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                  <Reserve item={data} />
                </div>
              </DialogClose>
            </DialogFooter>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
