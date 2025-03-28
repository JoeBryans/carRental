"use client";
import CalculateDate from "../../components/CalculateDate";
import Container from "../../components/Container";
import Currency from "../../components/Currency";
import SearchSideBar from "../../components/header/SearchSideBar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  CarFrontIcon,
  FuelIcon,
  LucideDoorClosed,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SearchParams = () => {
  const daysDiff = useSelector((state) => state.car.search);
  console.log(daysDiff);
  const { checkin, checkout } = daysDiff;
  const [show, setShow] = useState(false);
  const search = useSearchParams();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    // const location = urlParams.get("location");
    urlParams.get("seats");
    urlParams.get("brand");
    urlParams.get("transmission");
    urlParams.get("max");
    urlParams.get("min");
    const searchQuery = urlParams.toString();
    const FetchData = async () => {
      const res = await fetch(`api/car/search?${searchQuery}`);
      const data = await res.json();
      setCars(data);
    };
    FetchData();
  }, [search]);

  return (
    <div>
      <Container>
        <div className="flex gap-8 w-full">
          <div className="w-60 hidden md:block">
            <SearchSideBar />
          </div>

          <div className="w-full flex flex-col gap-4 ">
            {cars &&
              cars.map((car, i) => {
                return (
                  <Card key={i}>
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
                                <span className="col-span-2">
                                  {car.transmission}
                                </span>
                              </span>
                              <span className="text-muted-foreground flex items-center gap-1">
                                <UsersRound />
                                <span> {`${car.seats} seats`}</span>
                              </span>
                              <span className="text-muted-foreground flex items-center gap-1">
                                <CarFrontIcon />
                                <span>{car.gearbox}</span>
                              </span>
                              <span className="text-muted-foreground flex items-center gap-1">
                                <CarFrontIcon />
                                <span>{`${car.mileage} mileage`}</span>
                              </span>
                            </div>
                            <div className="">
                              <CalculateDate
                                price={car.price}
                                date1={checkin}
                                date2={checkout}
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <Button
                              onClick={() => setShow(!show)}
                              variant="warning"
                              className="w-max mt-2"
                            >
                              see more
                            </Button>
                            <Button variant="primary" className="w-max mt-2">
                              <Link href={`/reserve/${car.id}`}> Reserve</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                      {/* futher info */}
                      <div
                        className={`${
                          show
                            ? "flex flex-wrap w-full gap-4 border rounded-lg p-3"
                            : "hidden"
                        }`}
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
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>
      </Container>
    </div>
  );
};

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParams />
    </Suspense>
  );
};

export default page;
