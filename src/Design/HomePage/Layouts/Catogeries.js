import React from "react";
import { clrs, cato } from "../../../DataStore";
import Heading from "../Components/Heading";
import SingleCat from "../Components/SingleCat";

export default function Catogeries() {
  return (
    <div
      style={{
        width: "20%",
        margin: "2px 10px",
        backgroundColor: clrs[1],
        padding: "10px 10px",
      }}
    >
      <Heading val="Catogeries" />
      {cato.map((val, key) => {
        return <SingleCat key={key} val={val}/>;
      })}
    </div>
  );
}
