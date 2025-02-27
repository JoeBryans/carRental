import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import {
  ArrowBigLeft,
  ArrowBigRight,
  CalendarRange,
  FuelIcon,
  MessageCircleDashed,
  Settings,
  User2,
  Users2,
} from "lucide-react";

const Blogs = () => {
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
  return (
    <div className="my-10 mx-auto">
      <div className="flex flex-col justify-center items-center mb-5">
        <h2 className="text-3xl font-semibold text-muted-foreground text-center">
          Blog & News
        </h2>
        <span className="text-xl font-semibold text-muted-foreground text-center">
          Latest Blog and News about cars
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cars.slice(0, 3).map((items, i) => {
          return (
            <div
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
                <h2 className="text-xl font-bold my-2">{items.name}</h2>
                <article className="line-clamp-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                  atque repellat beatae molestiae tempora sequi error sint
                  veritatis consectetur, autem maxime, necessitatibus ea itaque
                  vel a nisi, vitae mollitia ipsam.
                </article>

                <div className="flex items-center justify-between w-full my-2">
                  <span className="flex gap-1 items-center">
                    <User2 />
                    Poster
                  </span>
                  <span className="flex gap-1 items-center">
                    <MessageCircleDashed /> Comments
                  </span>
                </div>
                <div className="flex items-center justify-between w-full my-2">
                  <span>2024-02-24</span>
                  <Button
                    variant="warning"
                    className="font-semibold text-xl w-max mt-2"
                  >
                    Read More <ArrowBigRight />
                  </Button>{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
