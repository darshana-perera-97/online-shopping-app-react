import React from "react";
import Icon from "../Components/Icon";
import AppName from "../Components/AppName";
import SearchItems from "./SearchItems";
import CartIcon from "../Components/CartIcon";

export default function TitleBar() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Icon />
        <AppName />
        <SearchItems />
        <CartIcon/>
      </div>
    </div>
  );
}
