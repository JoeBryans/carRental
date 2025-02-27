import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { CalendarRange, FuelIcon, Settings, Users2 } from "lucide-react";
import { motion } from "framer-motion";

const Cars = () => {
  const cars = [
    {
      name: "Tesla Model s Plaid",
      image: "/img/10815882.png",
      price: 150,
      seat: 4,
      fuelType: "Electric",
      gear: "Auto",
      year: "2015",
      mileage: "27k",
      engine: "V16",
    },
    {
      name: "mecedes benz",
      image: "/img/11452719.png",
      price: 170,
      seat: 4,
      fuelType: "Fuel",
      gear: "Auto",
      year: "2024",
      mileage: "37k",
      engine: "V16",
    },
    {
      name: "Suv",
      image: "/img/10815916.png",
      price: 200,
      seat: 4,
      fuelType: "Fuel",
      gear: "Auto",
      year: "2023",
      mileage: "47k",
      engine: "V16",
    },
    {
      name: "Tesla Model s Plaid",
      image: "/img/10815882.png",
      price: 150,
      seat: 4,
      fuelType: "electric",
      gear: "Auto",
      year: "2015",
      mileage: "27k",
      engine: "V16",
    },
    {
      name: "Tesla Model s Plaid",
      image: "/img/10815882.png",
      price: 150,
      seat: 4,
      fuelType: "electric",
      gear: "Auto",
      year: "2015",
      mileage: "27k",
      engine: "V16",
    },
    {
      name: "Mecedes Benz R3",
      image: "/img/car-1.png",
      price: 150,
      seat: 4,
      fuelType: "petrol",
      gear: "Auto",
      year: "2015",
      mileage: "27k",
      engine: "V16",
    },
  ];
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
        {cars.map((items, i) => {
          return (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              key={i}
              className="flex flex-col gap-8 max-w-80 w-[95%] max-auto p-2 hover:border-2 rounded-lg transition-all ease-out"
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
                <h2 className="text-xl font-bold my-4">{items.name}</h2>

                <div className="grid grid-cols-3 w-full  gap-4">
                  <span className="flex items-center gap-1">
                    <Users2 /> {`${items.seat} seat`}
                  </span>
                  <span className="flex items-center gap-1">
                    {`${items.engine} `}
                  </span>
                  <span className="flex items-center gap-1">
                    <FuelIcon /> {`${items.fuelType}`}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarRange /> {`${items.year}`}
                  </span>
                  <span className="flex items-center gap-1">
                    <Settings /> {`${items.gear} `}
                  </span>
                  <span className="flex items-center gap-1">
                    {`${items.mileage}K`}
                  </span>
                </div>
                <div className="divider"></div>
                <div className="flex items-center justify-between w-full">
                  <span>${items.price}</span>
                  <Button
                    variant="primary"
                    className="font-semibold text-xl w-max mt-2"
                  >
                    Book
                  </Button>{" "}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Cars;
