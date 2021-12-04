import React from "react";
import { Outlet } from "react-router-dom";

import LayoutNavigation from "./LayoutNavigation";
import LayoutFooter from "./LayoutFooter";

export const Layout = (props) => {
  return (
    <>
      <LayoutNavigation {...props} />

      {/* An <Outlet> renders whatever child route is currently active */}
      <Outlet />

      <LayoutFooter />
    </>
  );
};
