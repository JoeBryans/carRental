"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CalendarRange, FuelIcon, Settings, Users2 } from "lucide-react";
import { motion } from "framer-motion";
import { Get } from "@/request/request";
import { Button } from "@/components/ui/button";
import { ReserveButton } from "../Reserve/ReserveButton";
import Currency from "@/components/Currency";

const AllCars = () => {
  const [car, setCar] = useState([]);
  useEffect(() => {
    const FetchData = async () => {
      const res = await Get();
      setCar(res);
      console.log(res);
    };
    FetchData();
  }, []);

  const container = {
    hidden: { opacity: 0, y: 200 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        // staggerChildren: 0.5,
        delay: 0.3 * i,
      },
    }),
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="my-10 mx-auto"
    >
      <div className="flex flex-col justify-center items-center mb-5">
        <h2 className="text-3xl font-semibold text-muted-foreground text-center">
          Our Vehicles
        </h2>
        <span className="text-xl font-semibold text-muted-foreground text-center">
          Explor the world with confortable car
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {car.map((items, i) => {
          return (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              key={i}
              className="flex flex-col gap-8 max-w-80 w-[95%] max-auto p-2 hover:border-2 rounded-lg "
            >
              <div className="max-h-48">
                <Image
                  src={items.image}
                  alt="image"
                  width={800}
                  height={800}
                  className="w-[100%] max-h-[100%]"
                />
              </div>
              <div className="">
                <h2 className="text-xl font-bold my-4 line-clamp-1">
                  {items.name}
                </h2>

                <div className="grid grid-cols-3 w-full  gap-4">
                  <span className="flex items-center gap-1">
                    <Users2 /> {`${items.seats} seat`}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src="/car.png" alt="car" className="w-4 h-4" />
                    {`${items.doors} `}
                  </span>
                  <span className="flex items-center gap-1">
                    <FuelIcon /> {`${items.petrol}`}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarRange /> {`${items.year}`}
                  </span>
                  <span className="flex items-center gap-1">
                    <Settings /> {`${items.gearbox} `}
                  </span>
                  <span className="flex items-center gap-1">
                    {`${items.mileage}`}
                  </span>
                </div>
                <div className="divider"></div>
                <div className="flex items-center justify-between w-full">
                  <Currency price={items.price} />

                  <ReserveButton id={items.id} items={items} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AllCars;
