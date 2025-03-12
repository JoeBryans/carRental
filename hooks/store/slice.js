import { createSlice } from "@reduxjs/toolkit";
import { tr } from "date-fns/locale";
if (typeof window !== "undefined") window.localStorage.getItem("car");
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("car", serializedState);
  } catch (err) {
    // console.error(err);
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("car");
    return serializedState ? JSON.parse(serializedState) : {};
  } catch (err) {
    return {};
  }
};
const searchSaveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("search", serializedState);
  } catch (err) {
    // console.error(err);
  }
};
const searchLoadState = () => {
  try {
    const serializedState = localStorage.getItem("search");
    return serializedState ? JSON.parse(serializedState) : {};
  } catch (err) {
    return {};
  }
};
const initialState = {
  cars: loadState(),
  search: searchLoadState(),
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    reserve: (state, action) => {
      state.cars = action.payload;
      saveState(state);
    },

    SearchBar: (state, action) => {
      state.search = action.payload;
      searchSaveState(state);
    },
  },
});

export const { reserve, SearchBar } = carSlice.actions;
export default carSlice.reducer;
