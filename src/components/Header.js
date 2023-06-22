import React from "react";
import logo from "../images/header__logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Логотип Mesto" />
    </header>
  );
}

export default Header;
