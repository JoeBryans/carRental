"use client";

import { Suspense } from "react";
import SearchFunction from "./searchFunction";

const SearchSideBar = () => {
  return (
    <Suspense>
      <SearchFunction />
    </Suspense>
  );
};
export default SearchSideBar;
