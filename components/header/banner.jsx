"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const RandomDisplay = (items) => {
  for (let i = items.length - 1; i > 0; i--) {
    const d = Math.floor(Math.random() * (i + 1));
    [items[i], items[d]] = [items[d], items[i]];
  }
  return items;
};
const Banner = () => {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);

  //   const data = Math.random(0, 10);
  console.log(slides);
  //   console.log(data);
  useEffect(() => {
    const Slids = [
      {
        id: 1,
        discription: (
          <div
            key={1}
            className="w-96 flex flex-col  justify-center text-white h-[100%] z-40 "
          >
            {/* <h2>Get 15% off your rental! Choose Your Model</h2> */}
            <h2 className="text-3xl font-bold text-muted">
              Save <b className="text-orange-600">big</b> with
              <b className="text-orange-600"> Decar</b> rental
            </h2>
            <span className="text-muted  text-xl font-semibold ">
              Rent the car of your dreams. lesser price, unlimited miles,
              flexible pick-up options and much more
            </span>
          </div>
        ),
        color: "bg-[#77CECF]",
        image: "/img/10815917.png",
      },
      {
        id: 2,
        discription: (
          <div key={2}>
            <h2 className="text-3xl font-bold text-gray-600">
              Save <b className="text-orange-600">big</b> with
              <b className="text-orange-600"> Decar</b> rental
            </h2>
            <span className="text-muted  text-xl font-semibold ">
              Rent the car of your dreams. lesser price, unlimited miles,
              flexible pick-up options and much more
            </span>
          </div>
        ),
        color: "bg-[#FFFFFF]",
        image: "/img/66815.jpg",
      },
      {
        id: 3,
        discription: (
          <div key={3}>
            <h2 className="text-3xl font-bold text-muted">
              Save <b className="text-orange-600">big</b> with
              <b className="text-orange-600"> Decar</b> rental
            </h2>
            <span className="text-muted  text-xl font-semibold ">
              Rent the car of your dreams. lesser price, unlimited miles,
              flexible pick-up options and much more
            </span>
          </div>
        ),
        color: "bg-[#848484]",
        image: "/img/10815912.png",
      },
    ];
    setSlides(RandomDisplay(Slids));
    console.log(Slids[0].discription);

    // setInterval(() => {
    //   setIndex(RandomDisplay(Slids[index]));

    //   //   const interval = setIndex((prev) => (prev + 1) % Slids.length);
    // }, 1000);
    // return () => clearInterval(interval);
  }, []);
  //   console.log(Slids);

  return (
    <div>
      <div className="w-full h-[93vh] flex items-center overflow-hidden mb-5">
        {slides &&
          slides.map((item, i) => {
            return (
              <div
                key={i}
                className={`relative w-screen flex justify-around text-muted-foreground h-[80vh]  ${item.color} z-10`}
              >
                <div className="absolute w-full flex items-center justify-around top-56 ">
                  <ArrowBigLeft
                    className="cursor-pointer"
                    onClick={
                      () => {}
                      //   handleSlides(slides[i - 1].id, slides[i + 1].id)
                    }
                  />
                  <ArrowBigRight />
                </div>
                <article className="w-96 flex flex-col  justify-center text-white h-[100%] z-40 ">
                  {item.discription}
                  <div className="flex items-center gap-4">
                    <Button
                      variant="warning"
                      className="font-semibold  text-xl w-max mt-2"
                    >
                      Explore cars
                    </Button>
                    <Button
                      variant="primary"
                      className="font-semibold text-xl w-max mt-2"
                    >
                      Book
                    </Button>
                  </div>
                </article>
                <Image
                  src={item.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-max xl:w-[50%] xl:min-h-[150%] xl:max-h-[100%] -ml-20 mt-10 "
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Banner;
