import React from "react";
import { appName, appDis, clrs } from "../../../DataStore";

export default function AppName() {
  return (
    <div>
      <p
        style={{
          fontSize: "20px",
          margin: "0px",
          fontFamily: "Pacifico",
          color: clrs[0],
        }}
      >
        {appName}
      </p>
      <p
        style={{
          fontSize: "10px",
          margin: "-5px",
          marginLeft: "5px",
          opacity: "0.6",
        }}
      >
        {appDis}
      </p>
    </div>
  );
}
