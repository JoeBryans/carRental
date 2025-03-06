import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slice";
const store = configureStore({
  reducer: {
    car: carSlice,
  },
});

export default store;
