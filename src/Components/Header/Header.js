import React from "react";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderTop from "./HeaderTop/HeaderTop";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      <Outlet />
    </>
  );
};

export default Header;
