import Image from "next/image";
import React from "react";

const WhyUse = () => {
  return (
    <div className="flex flex-col gap-3 text-muted-foreground w-fullmd:mt-5 mt-20">
      <div className="flex justify-center overflow-hidden mb-5">
        <Image
          src="/img/download (13).jpg"
          alt="/image"
          width={300}
          height={300}
          className="w-[30%]"
        />
        <Image
          src="/img/download (11).jpg"
          alt="/image"
          width={300}
          height={300}
        />
        <Image
          src="/img/download (12).jpg"
          alt="/image"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col items-center ">
        <h2 className="text-2xl font-bold">
          Why You Should Choose Decar Rental
        </h2>
        <h1 className="text-3xl font-bold">
          Deals with premium cars you will ever find
        </h1>
      </div>
      <article className="mb-5 font-semibold text-xl">
        Discover the best deals you'll ever find with our best offer rate. we're
        dedicated to providing with the best value for your money, so you can
        enjoy our top quality service and products without breaking the bank.
        Our deals are available to give you the ultimate renting wxperiens, so
        don't miss out on your chance to save big
      </article>
    </div>
  );
};

export default WhyUse;
