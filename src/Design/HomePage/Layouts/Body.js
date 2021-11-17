import React from "react";
import Catogeries from "./Catogeries";
import Carasoles from "./Carasoles";
import Login from "./Login";
import { clrs } from "../../../DataStore";

export default function Body() {
  return (
    <div style={{ backgroundColor: clrs[2], display: "flex",padding:"10px" }}>
      <Catogeries />
      <Carasoles />
      <Login />
    </div>
  );
}
