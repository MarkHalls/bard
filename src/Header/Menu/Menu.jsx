import React from "react";

import "./Menu.css";
import menuIcon from "./assets/ic_menu_black_24px.svg";

const Menu = () => {
  return (
    <button class="menu-button">
      <img src={menuIcon} alt="Menu" />
    </button>
  );
};

export { Menu };
