"use client";
import React from "react";
import { Provider } from "react-redux";
import stores from "../hooks/store/store";
const Providers = ({ children }) => {
  return <Provider store={stores}>{children}</Provider>;
};

export default Providers;
