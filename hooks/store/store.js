import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slice";

const stores = configureStore({
  reducer: {
    car: carSlice,
  },
});

export default stores;
