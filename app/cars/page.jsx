import Container from "@/components/Container";
import Filter from "@/components/header/Filter";
import AllCars from "@/components/page/cars/Car";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative flex flex-col gap-8 h-[80vh] ">
        <div className="w-full bg-[#32363E] h-[70vh]">
          <Image
            src={"/images (4).jpg"}
            alt=" banner"
            width={2000}
            height={2000}
            className="w-full max-h-[100%] "
          />
        </div>
        <div className="absolute bottom-1 z-20">
          <Filter />
        </div>
      </div>
      <Container>
        <AllCars />
      </Container>
    </div>
  );
};

export default page;
