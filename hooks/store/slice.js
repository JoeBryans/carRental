import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  search: {},
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
    },
    removeCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
    SearchBar: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addCar, removeCar, SearchBar } = carSlice.actions;
export default carSlice = reducers;
