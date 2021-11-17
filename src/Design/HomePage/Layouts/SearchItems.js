import React from "react";
import SearchBar from "../Components/SearchBar";
import SearchText from "../Components/SearchText";

export default function SearchItems() {
  return (
    <div style={{ marginLeft: "25px", margin: "auto" }}>
      <SearchBar />
      <SearchText />
    </div>
  );
}
