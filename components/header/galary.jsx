import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Slider = () => {
  const Slids = [
    {
      discription: <div>Hello1</div>,
      color: "bg-[#77CECF]",
      image: "/img/10815917.png",
    },
    {
      discription: <div>hello2</div>,
      color: "bg-[#77CECF]",

      image: "/img/66815.jpg",
    },
    {
      discription: <div>Hello3</div>,
      color: "bg-[#77CECF]",
      image: "/img/10815912.png",
    },
  ];

  const data = Slids;
  console.log(data);

  return (
    <div>
      <div className="carousel w-full h-[92vh] overflow-hidden">
        <div id="item1" className="carousel-item w-full">
          <div className="w-screen flex justify-around text-muted-foreground h-[80vh]  bg-[#77CECF] z-10">
            <div className="w-96 flex flex-col  justify-center text-white h-[100%] z-40 ">
              {/* <h2>Get 15% off your rental! Choose Your Model</h2> */}
              <h2 className="text-3xl font-bold text-muted">
                Save <b className="text-orange-600">big</b> with
                <b className="text-orange-600"> Decar</b> rental
              </h2>
              <span className="text-muted  text-xl font-semibold ">
                Rent the car of your dreams. lesser price, unlimited miles,
                flexible pick-up options and much more
              </span>
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
            </div>
            <Image
              src="/img/10815917.png"
              alt=""
              width={1000}
              height={1000}
              className="w-max xl:w-[50%] xl:h-[150%] -ml-20 mt-10 "
            />
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div className="w-screen flex justify-around text-muted-foreground h-[80vh]  bg-[#FFFFFF] z-10">
            <div className="w-96 flex flex-col  justify-center text-white h-[100%] ">
              {/* <h2>Get 15% off your rental! Choose Your Model</h2> */}
              <h2 className="text-3xl font-bold text-muted-foreground">
                <b className="text-orange-600"> Decar</b> gives Primium car
                <b className="text-orange-600">Rental </b>
              </h2>
              <span className="text-muted-foreground text-xl font-semibold ">
                Book the car of your choice effortlessly{" "}
              </span>
              <Button
                variant="primary"
                className="font-semibold text-xl w-max mt-2"
              >
                Explore cars
              </Button>
            </div>
            <Image
              src="/img/66815.jpg"
              alt=""
              width={1000}
              height={1000}
              className="w-max xl:w-[60%] xl:h-[100%] -ml-20 mt-20"
            />
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <div className="w-screen flex justify-around text-muted-foreground h-[80vh]  bg-[#848484] z-10">
            <div className="w-96 flex flex-col  justify-center text-white h-[100%] ">
              {/* <h2>Get 15% off your rental! Choose Your Model</h2> */}
              <h2 className="text-3xl font-bold text-muted">
                Quality Cars with
                <b className="text-orange-600"> Unlimited miles</b> Get 15% off
                your rental! Choose Your Model
              </h2>
              <span className="text-muted text-xl font-semibold ">
                Book the car of your choice effortlessly{" "}
              </span>
              <Button
                variant="primary"
                className="font-semibold text-xl w-max mt-2"
              >
                Explore cars
              </Button>
            </div>
            <Image
              src="/img/10815912.png"
              alt=""
              width={1000}
              height={1000}
              className="w-max xl:w-[60%] xl:h-[150%] -ml-20 mt-5"
            />
          </div>
        </div>
        {/* <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
        </div> */}
      </div>
      {/* <div className="flex flex-col w-full  gap-2 py-2">
        <a href="#item1" className="w-max px-2 btn btn-xs">
          1
        </a>
        <a href="#item2" className="w-max px-2 btn btn-xs">
          2
        </a>
        <a href="#item3" className="w-max px-2 btn btn-xs">
          3
        </a>
      </div> */}
    </div>
  );
};

export default Slider;
