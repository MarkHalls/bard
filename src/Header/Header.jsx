import React from "react";

import "./Header.css";
import { Menu } from "./Menu";
import { Title } from "./Title";

const Header = () => {
  return (
    <header>
      <Menu className="header-menu" />
      <Title className="header-title" />
    </header>
  );
};

export { Header };
