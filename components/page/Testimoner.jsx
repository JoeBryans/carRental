import Image from "next/image";
import React from "react";

const Testimoner = () => {
  return (
    <div className="my-10 ">
      <div className="my-10 flex flex-col items-center text-muted-foreground">
        <span className="text-2xl ">Reviews by people</span>
        <h2 className="text-3xl font-semibold ">Client's Testimonials</h2>
        <span className="text-xl ">
          Discover the positive impart we've made on our clients by reading
          their testimonials.
        </span>
      </div>
      <div className="flex items-center  gap-4 w-full overflow-hidden scroll-smooth scroll-hide">
        {[0, 1, 2, 3, 4, 5, 6].map((item, i) => {
          return (
            <div className="card flex flex-col gap-3 max-w-[450px]">
              <div className="flex gap-8 ">
                <Image
                  src={"/img/testimonial-3.jpg"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-[20%] object-contain rounded-full"
                />
                <div className="flex flex-col ">
                  <span>Joe Bryan</span>
                  <span>London</span>
                </div>
              </div>
              <article className="w-96">
                We rented a car from Decar Rentals and had an amazing expirence!
                Then Renting system was easy and the price were very affordable
              </article>
              <span>2024-10-25</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimoner;
