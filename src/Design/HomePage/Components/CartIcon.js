import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { clrs } from "../../../DataStore";

export default function CartIcon() {
  return (
    <div>
      <ShoppingCartIcon
        style={{ fontSize: "30px", marginTop: "5px", color: clrs[0],padding:"0px 20px" }}
      />
    </div>
  );
}
