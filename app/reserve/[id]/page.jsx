import Container from "../../../components/Container";
import Currency from "../../../components/Currency";
import { Card, CardContent } from "../../../components/ui/card";
import Image from "next/image";
import React from "react";

import { Button } from "../../../components/ui/button";
import {
  CarFrontIcon,
  CarTaxiFrontIcon,
  FuelIcon,
  LucideDoorClosed,
  UsersRound,
} from "lucide-react";
import CalculateDate from "../../../components/CalculateDate";
import Link from "next/link";
import Reserve from "../../../components/page/Reserve/Reserve";

const page = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  let car = {};
  const res = await fetch(`http://localhost:3000/api/car/${id}`);
  const data = await res.json();
  console.log(data);
  // (data);
  // cars.push(data);
  car = data;

  console.log(car);

  return (
    <div>
      <Container>
        <Card>
          <CardContent>
            <div className="flex md:flex-row flex-col gap-4 w-full  ">
              <Image
                src={car.image}
                alt="image"
                width={200}
                height={200}
                className="w-[40%] object-contain"
              />
              <div className="flex flex-col gap-2 w-full">
                <div className="flex w-full items-center justify-between font-semibold text-xl ">
                  <span className="text-muted-foreground line-clamp-3">
                    {car.name}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    <Currency price={car.price} /> per day
                  </span>
                </div>
                <div className="flex justify-between w-full ">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <FuelIcon />
                      <span>{car.petrol}</span>
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <LucideDoorClosed />
                      <span>{`${car.petrol} doors`}</span>
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <CarFrontIcon />
                      <span className="col-span-2">{car.transmission}</span>
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <UsersRound />
                      <span> {`${car.seats} seats`}</span>
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <CarTaxiFrontIcon />
                      <span>{car.gearbox}</span>
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <CarFrontIcon />
                      <span>{`${car.mileage} mileage`}</span>
                    </span>
                  </div>
                  <div className="">
                    <CalculateDate price={car.price} />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  {/* <Button variant="primary" className="w-max mt-2">
                    <Link href={`/reserve/${car.id}`}> Reserve</Link>
                  </Button> */}
                </div>
              </div>
            </div>
            {/* futher info */}
            <div
              className={`flex flex-wrap w-full gap-4 border rounded-lg p-3"
               
              `}
            >
              <span className="text-muted-foreground flex items-center gap-1">
                <FuelIcon />
                <span>Gas</span>
              </span>
              <span className="text-muted-foreground flex items-center gap-1">
                <LucideDoorClosed />
                <span>5 doors</span>
              </span>
              <span className="text-muted-foreground flex items-center gap-1">
                <CarFrontIcon />
                <span className="col-span-2">Automatic</span>
              </span>
              <span className="text-muted-foreground flex items-center gap-1">
                <UsersRound />
                <span>4 Seats</span>
              </span>
              <span className="text-muted-foreground flex items-center gap-1">
                <CarFrontIcon />
                <span>gear</span>
              </span>
              <span className="text-muted-foreground flex items-center gap-1">
                <CarFrontIcon />
                <span>120k milage</span>
              </span>
            </div>
            <div className="w-full text-right">
              <Reserve item={car} />
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default page;
