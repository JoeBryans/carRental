"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Calendar, User2 } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import Category from "../page/Category";
import { Label } from "../ui/label";

const SearchSideBar = () => {
  const router = useRouter();
  const search = useSearchParams();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    // location: "",
    // petrol: "",
    seats: 0,
    transmission: "",
    min: 0,
    max: 0,
    brand: "",
  });
  console.log(formData);

  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const start = format(date.startDate, "MM-dd-yyyy");
  const end = format(date.endDate, "MM-dd-yyyy");
  const handleChange = (ranges) => {
    setDate(ranges.selection);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const checkin = urlParams.get("checkin");
    const checkout = urlParams.get("checkout");
    const location = urlParams.get("location");
    const seats = urlParams.get("seats");
    const brand = urlParams.get("brand");
    const transmission = urlParams.get("transmission");
    const max = urlParams.get("max");
    const min = urlParams.get("min");
    setDate({
      startDate: checkin,
      endDate: checkout,
    });
    setFormData({
      // location: "",
      // petrol: "",
      seats: seats || 0,
      transmission: transmission || "",
      min: min || 0,
      max: max || 0,
      brand: brand || "",
    });
    // urlParams.get("checkout");
    // urlParams.get("location");
    console.log(checkin);
  }, [search]);

  const handleButton = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(search);
    // params.set("location", formData.location);
    params.set("checkin", start);
    params.set("brand", formData.brand);
    params.set("transmission", formData.transmission);
    params.set("seats", formData.seats);
    // params.set("petrol", formData.petrol);
    params.set("min", formData.min);
    params.set("max", formData.max);
    const filtal = params.toString();

    router.push(`/search?${filtal}`);
  };

  return (
    <div className="w-52 hidden md:block  sticky top-0">
      <Card>
        <CardHeader className="font-lg font-bold"> Filter</CardHeader>
        <CardContent className="flex flex-col gap-4 text-muted-foreground">
          <div className=" flex items-center ">
            <Input
              placeholder="Destination"
              name="location"
              onChange={handleFormChange}
            />
          </div>
          <Label htmlFor="brand" className="w-full ">
            <select
              name="brand"
              id="brand"
              onChange={handleFormChange}
              className="w-full p-2 rounded-lg border"
            >
              <option
                value=""
                className="text-muted-foreground"
                defaultValue={""}
              >
                Brand
              </option>
              <option value="lambo">Lambo</option>
              <option value="camery">Camery</option>
              <option value="benz">Benz</option>
              <option value="tesla">Tesla</option>
              <option value="toyotal">Toyotal</option>
            </select>
          </Label>
          <div className="calender flex flex-col gap-4 items-center  relative">
            <span
              onClick={() => setOpen(!open)}
              className="flex text-muted-foreground items-center justify-center gap-2 border py-1 px-3 rounded-lg"
            >
              <span className="font-semibold ">start :</span>
              {start}
            </span>
            <span className="w-full flex text-muted-foreground items-center justify-center gap-2 border py-1 px-3 rounded-lg">
              <span className="font-semibold ">end :</span> {end}
            </span>
            {open ? (
              <DateRange
                ranges={[date]}
                onChange={handleChange}
                minDate={new Date()}
              />
            ) : null}
          </div>
          <Label htmlFor="brand" className="w-full ">
            <select
              name="transmission"
              id="transmission"
              onChange={handleFormChange}
              className="w-full p-2 rounded-lg border"
            >
              <option
                value=""
                className="text-muted-foreground"
                defaultValue={""}
              >
                Transmission
              </option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </Label>{" "}
          <Label htmlFor="brand" className="w-full ">
            <select
              name="seats"
              id="seats"
              onChange={handleFormChange}
              className="w-full p-2 rounded-lg text-muted-foreground  border"
            >
              <option
                value=""
                className="text-muted-foreground"
                defaultValue={0}
              >
                Seat
              </option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Label>
          <div className="price flex flex-col gap-4">
            <Input
              name="min"
              placeholder="min price"
              onChange={handleFormChange}
            />
            <Input
              name="max"
              placeholder="max price"
              onChange={handleFormChange}
            />
          </div>
          <Button variant="primary" className="w-full" onClick={handleButton}>
            Search
          </Button>
        </CardContent>
      </Card>
    </div>
    //{" "}
    // </div>
  );
};

export default SearchSideBar;
