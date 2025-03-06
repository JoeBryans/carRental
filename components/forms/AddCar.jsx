"use client";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useSearchParams } from "next/navigation";
import Category from "../page/Category";
import { Button } from "../ui/button";
import Additional_Info from "./Additional_Info";
import UploadButtons from "../UploadThing/UploadButton";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { PostRequest } from "@/request/request";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

// car schema
const carSchema = yup.object().shape({
  name: yup.string().min(3).required({ message: "Name is required" }),
  price: yup.number().min(1).required({ message: "Price is required" }),
  brand: yup.string().required({ message: "Brand is required" }),
  //   description: yup.string(),
  transmission: yup.string().min(3),
  engine: yup.string().min(3),
  gearbox: yup.string().min(3),
  doors: yup.number().min(1),
  seats: yup.number().min(1),
  cylinders: yup.string().min(3),
  petrol: yup.string().min(3),
  model: yup.string().min(3),
  year: yup.string().min(3),
  mileage: yup.string().min(3),
  // condition: yup.string().min(3),
});

const AddCar = () => {
  const { user } = useUser();
  const useEmail = user?.primaryEmailAddress?.emailAddress;
  const [additionalInfo, setAdditionalInfo] = useState([""]);
  const [image, setImage] = useState("");
  console.log(additionalInfo);
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const additiona = [...additionalInfo];
    additiona[i] = value;
    setAdditionalInfo(additiona);
  };
  const HandleClick = () => {
    setAdditionalInfo([...additionalInfo, ""]);
  };

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: errors,
  } = useForm({ resolver: yupResolver(carSchema) });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "/api/car",
        { ...data, image: image, features: additionalInfo, userId: useEmail },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-full w-[90%]   p-3 mx-auto z-20">
      <Card>
        <CardHeader className="w-full text-center font-bold text-2xl ">
          <CardTitle> Car Listen</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className=" w-[95%] flex flex-col items-center mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full grid grid-cols-1 md:grid-cols-2   mx-auto gap-5  ">
              <div className="flex flex-col ">
                <Label
                  htmlFor="name"
                  className="flex flex-col gap-3 px-3 py-1 w-full "
                >
                  <span>Name</span>
                  <Input
                    id="name"
                    {...register("name")}
                    className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                  />
                  {errors.name && (
                    <span className="text-rose-500 text-xs">
                      {errors.name.message}
                    </span>
                  )}
                </Label>
                <div className="flex items-center w-full gap-5">
                  <Label
                    htmlFor="brand"
                    className="flex flex-col gap-3 px-3 py-1 w-full "
                  >
                    <span>Brand</span>

                    <select
                      name="brand"
                      id="brand"
                      {...register("brand")}
                      className="w-full p-2 rounded-lg border"
                    >
                      <option value="">Brand</option>
                      <option value="lambo">Lambo</option>
                      <option value="camery">Camery</option>
                      <option value="benz">Benz</option>
                      <option value="tesla">Tesla</option>
                      <option value="toyotal">Toyotal</option>
                    </select>
                    {/* <Category register={{ ...register("brand") }} /> */}
                    {errors.brand && (
                      <span className="text-rose-500 text-xs">
                        {errors.brand.message}
                      </span>
                    )}
                  </Label>
                  <Label
                    htmlFor="price"
                    className="flex flex-col gap-3 px-3 py-1 w-full "
                  >
                    <span>Price</span>
                    <Input
                      id="price"
                      type="number"
                      {...register("price")}
                      className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                    />

                    {errors.price && (
                      <span className="text-rose-500 text-xs">
                        {errors.price.message}
                      </span>
                    )}
                  </Label>
                </div>
                <Label
                  htmlFor="transmission"
                  className="flex flex-col gap-3 px-3 py-1 w-full "
                >
                  <span>Transmission</span>
                  <Input
                    id="transmission"
                    {...register("transmission")}
                    className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                  />
                  {errors.transmission && (
                    <span className="text-rose-500 text-xs">
                      {errors.transmission.message}
                    </span>
                  )}
                </Label>
                <div className="flex items-center w-full gap-5">
                  <Label
                    htmlFor="engine"
                    className="flex flex-col gap-3 px-3 py-1 w-full "
                  >
                    <span>Engine</span>
                    <Input
                      id="engine"
                      {...register("engine")}
                      className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                    />
                    {errors.engine && (
                      <span className="text-rose-500 text-xs">
                        {errors.engine.message}
                      </span>
                    )}
                  </Label>
                  <Label
                    htmlFor="gearbox"
                    className="flex flex-col gap-3 px-3 py-1 w-full "
                  >
                    <span>Gearbox</span>
                    <Input
                      id="gearbox"
                      {...register("gearbox")}
                      className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                    />
                    {errors.gearbox && (
                      <span className="text-rose-500 text-xs">
                        {errors.gearbox.message}
                      </span>
                    )}
                  </Label>
                </div>
                <div className="flex items-center w-full gap-5">
                  <Label
                    htmlFor="doors"
                    className="flex flex-col gap-3 px-3 py-1 w-full "
                  >
                    <span>doors</span>
                    <Input
                      id="doors"
                      {...register("doors")}
                      className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                    />
                    {errors.doors && (
                      <span className="text-rose-500 text-xs">
                        {errors.doors.message}
                      </span>
                    )}
                  </Label>
                  <Label
                    htmlFor="seat"
                    className="flex flex-col gap-3 px-3 py-1 w-full "
                  >
                    <span>Seat</span>
                    <Input
                      id="seats"
                      {...register("seats")}
                      className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                    />
                    {errors.seat && (
                      <span className="text-rose-500 text-xs">
                        {errors.seat.message}
                      </span>
                    )}
                  </Label>
                </div>
              </div>

              {/* seecond part */}

              <div className="flex flex-col ">
                <div className="flex items-center w-full gap-5">
                  <Label
                    htmlFor="petrol"
                    className="flex flex-col gap-3 px-3 py-1 w-full "
                  >
                    <span>Petrol</span>
                    <Input
                      id="petrol"
                      {...register("petrol")}
                      className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                    />
                    {errors.petrol && (
                      <span className="text-rose-500 text-xs">
                        {errors.petrol.message}
                      </span>
                    )}
                  </Label>
                  <Label
                    htmlFor="model"
                    className="flex flex-col gap-3 px-3 py-1 w-full "
                  >
                    <span>Model</span>
                    <Input
                      id="model"
                      {...register("model")}
                      className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                    />
                    {errors.model && (
                      <span className="text-rose-500 text-xs">
                        {errors.model.message}
                      </span>
                    )}
                  </Label>
                </div>
                <div className="flex items-center w-full gap-5">
                  <Label
                    htmlFor="year"
                    className="flex flex-col gap-3 px-3 py-1 w-full "
                  >
                    <span>Year</span>
                    <Input
                      id="year"
                      {...register("year")}
                      className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                    />
                    {errors.year && (
                      <span className="text-rose-500 text-xs">
                        {errors.year.message}
                      </span>
                    )}
                  </Label>
                  <Label
                    htmlFor="mileage"
                    className="flex flex-col gap-3 px-3 py-1 w-full "
                  >
                    <span>Mileage</span>
                    <Input
                      id="mileage"
                      {...register("mileage")}
                      className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                    />
                    {errors.mileage && (
                      <span className="text-rose-500 text-xs">
                        {errors.mileage.message}
                      </span>
                    )}
                  </Label>
                </div>
                {/* <Button
              type="button"
              variant="secondary"
              className="w-max mx-4 px-2 my-8"
            >
              Additional Info
                      </Button> */}
                <div className="flex items-center w-full gap-5 mb-4">
                  <Label
                    htmlFor="cylinders"
                    className="flex flex-col gap-3 px-3 py-1 w-full "
                  >
                    <span>Cylinders</span>
                    <Input
                      id="cylinders"
                      {...register("cylinders")}
                      className="border-2 focuse:outline-0 fucous:border-0 rounded-lg py-2"
                    />
                    {errors.cylinders && (
                      <span className="text-rose-500 text-xs">
                        {errors.cylinders.message}
                      </span>
                    )}
                  </Label>
                  <div className="flex flex-col gap-3 px-3 py-1 w-full ">
                    {/* <span>Additional Info</span> */}
                    <Additional_Info
                      handleChange={handleChange}
                      HandleClick={HandleClick}
                      additionalInfo={additionalInfo}
                    />
                  </div>
                </div>

                <div className="w-full flex  items-center justify-center border rounded-xl h-28 my-4 px-5">
                  {/* <Input type="file" />
              <Button
                type="button"
                variant="success"
                className="w-max px-2 my-8"
              >
                Upload
              </Button> */}
                  <UploadButtons setImage={setImage} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 px-3 py-1 w-[300px] mt-2 mb-2">
              <button className="p-2 rounded-lg text-white bg-indigo-700 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 font-semibold transition:all w-full">
                {isLoading ? (
                  <div
                    className="radial-progress text-primary animate-spin"
                    style={{
                      "--value": 80,
                      "--size": "1rem",
                      "--thickness": "2px",
                    }}
                    role="progressbar"
                  ></div>
                ) : (
                  "Add to product"
                )}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCar;
