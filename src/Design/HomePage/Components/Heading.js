import React from "react";

export default function Heading(prop) {
  return (
    <div>
      <p style={{ margin: "0px", fontWeight: "bold", fontSize: "15px",padding:"0px 10px" }}>
        {prop.val}
      </p>
    </div>
  );
}
