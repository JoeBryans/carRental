import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: localStorage.getItem("car")
    ? JSON.parse(localStorage.getItem("car"))
    : [],
  search: localStorage.getItem("date")
    ? JSON.parse(localStorage.getItem("date"))
    : {},
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    reserve: (state, action) => {
      state.cars.push(action.payload);
      localStorage.setItem("car", JSON.stringify(state.cars));
    },

    SearchBar: (state, action) => {
      state.search = action.payload;
      localStorage.setItem("date", JSON.stringify(state.search));
    },
  },
});

export const { reserve, SearchBar } = carSlice.actions;
export default carSlice.reducer;
