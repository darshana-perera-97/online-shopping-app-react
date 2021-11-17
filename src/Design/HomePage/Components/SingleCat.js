import React from "react";

export default function SingleCat(prop) {
  return (
    <div style={{ marginLeft: "20px" }}>
      <p
        style={{ fontSize: "15px", margin: "0px", padding: "3px 0px" }}
        id="SingleCat"
      >
        {prop.val}
      </p>
    </div>
  );
}
