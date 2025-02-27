import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Slider from "./galary";
import Filter from "./Filter";

const Hero = () => {
  return (
    <div className="w-screen h-max relative">
      {/* <div className="w-screen flex justify-around text-muted-foreground h-[80vh] opacity-50 bg-black absolute top-0 z-30"></div> */}

      <div className="flex srollBar-hide  h-max overflow-x-hidden">
        <div className="relative h-[92vh]">
          <Slider />
          {/* <div className="absolute top-0 bg-slate-900 bg-opacity-80 text-muted w-full h-[87%] z-20">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            suscipit inventore cupiditate ex. Nisi iure quisquam temporibus
            optio blanditiis qui, architecto inventore, cum rem, nemo ratione
            assumenda ex dolore omnis.
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
