import React from "react";
import { searchTexts } from "../../../DataStore";

export default function SearchText() {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "auto",
        textAlign: "center",
        marginRight: "auto",
        width:"70vh"
      }}
    >
      {searchTexts.map((val, key) => {
        return (
          <p
            key={key}
            style={{ margin: "0px 5px", fontSize: "10px", opacity: "0.6" }}
          >
            {val}
          </p>
        );
      })}
    </div>
  );
}
