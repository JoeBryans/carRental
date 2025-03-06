import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Category = () => {
  return (
    <div className="w-full">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Car Brand" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Brand</SelectLabel>
            <SelectItem value="lambo">Lambo</SelectItem>
            <SelectItem value="camery">Camery</SelectItem>
            <SelectItem value="benz">Benz</SelectItem>
            <SelectItem value="tesla">Tesla</SelectItem>
            <SelectItem value="toyotal">Toyotal</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Category;
