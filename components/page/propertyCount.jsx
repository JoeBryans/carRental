import Image from "next/image";
import React from "react";
import Container from "../Container";
import { Car, CarFront } from "lucide-react";

const PropertyCount = () => {
  return (
    <div className="relative ">
      <div className="w-full max-h-72 relative">
        <Image
          src={"/img/fact-bg.jpg"}
          alt="image"
          width={800}
          height={800}
          className="w-screen max-h-72"
        />
        <div className="absolute top-0 bg-slate-900 flex items-center bg-opacity-80 text-muted w-full h-full z-20">
          <Container>
            <div className="mx-auto w-full">
              <div className="grid grid-cols-3 justify-between">
                <div className="box relative w-28 h-28 rounded-full bg-indigo-700 flex flex-col items-center justify-center">
                  <div className="absolute -top-2 right-2 w-10 h-10 rounded-full bg-orange-700 flex justify-center items-center ">
                    <CarFront />
                  </div>
                  <span className="font-bold text-xl">652</span>
                  <span className="font-bold text-sm">Number of cars</span>
                </div>
                <div className="box relative w-28 h-28 rounded-full bg-indigo-700 flex flex-col items-center justify-center">
                  <div className="absolute -top-2 right-2 w-10 h-10 rounded-full bg-orange-700 flex justify-center items-center ">
                    <CarFront />
                  </div>
                  <span className="font-bold text-xl">652</span>
                  <span className="font-bold text-sm">Number of cars</span>
                </div>
                <div className="box relative w-28 h-28 rounded-full bg-indigo-700 flex flex-col items-center justify-center">
                  <div className="absolute -top-2 right-2 w-10 h-10 rounded-full bg-orange-700 flex justify-center items-center ">
                    <CarFront />
                  </div>
                  <span className="font-bold text-xl">652</span>
                  <span className="font-bold text-sm">Number of cars</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default PropertyCount;
