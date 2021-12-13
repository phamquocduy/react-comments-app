import React from "react";
import { Outlet } from "react-router-dom";

import LayoutNavigation from "./LayoutNavigation";
import LayoutFooter from "./LayoutFooter";

import * as Styled from "./Layout.styles";

export const Layout = (props) => {
  return (
    <>
      <LayoutNavigation {...props} />

      <Styled.BodyWrapper>
        {/* An <Outlet> renders whatever child route is currently active */}
        <Outlet />
      </Styled.BodyWrapper>

      <LayoutFooter />
    </>
  );
};
