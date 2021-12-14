import React from "react";
import { Outlet } from "react-router-dom";

import LayoutNavigation from "./LayoutNavigation";
import LayoutFooter from "./LayoutFooter";
import { AppRoute } from "../types";

import * as Styled from "./Layout.styles";

interface Props {
  appRoutes: AppRoute[];
}

export const Layout: React.FC<Props> = ({ appRoutes }) => {
  return (
    <>
      <LayoutNavigation appRoutes={appRoutes} />

      <Styled.BodyWrapper>
        {/* An <Outlet> renders whatever child route is currently active */}
        <Outlet />
      </Styled.BodyWrapper>

      <LayoutFooter />
    </>
  );
};
