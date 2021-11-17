import { keys } from "@mui/system";
import React from "react";
import { menuList } from "../../../DataStore";
import Heading from "../Components/Heading";

export default function Carasoles() {
  return (
    <div
      style={{
        width: "60%",
        margin: "2px 10px",
        padding: "10px 10px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "70%",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        {menuList.map((val, key) => {
          return <Heading val={val} key={key} />;
        })}
      </div>
    </div>
  );
}
