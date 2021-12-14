import React from "react";
import cs from "classnames";
import { Menu as MenuIcon, X as CloseIcon } from "@styled-icons/heroicons-solid";
import { useLocation } from "react-router-dom";

import { useToggle } from "../../hooks";
import { AppRoute } from "../types";

import * as Styled from "./LayoutNavigation.styles";
import ReactLogo from "../../assets/logo.svg";

interface Props {
  appRoutes: AppRoute[];
}

const LayoutNavigation: React.FC<Props> = ({ appRoutes = [] }) => {
  const [mobileMenuOpen, toggleMenuMobile] = useToggle();
  const location = useLocation();

  const routeIsSelected = (route: AppRoute) => {
    let loc = location.pathname.replace("/", "");
    let currRoute = route.path.replace("/", "");

    let homePageIsSelected = !loc && !currRoute;
    let otherRouteIsSelected = currRoute && loc.includes(currRoute);

    return homePageIsSelected || otherRouteIsSelected;
  };

  return (
    <>
      <Styled.Navigation>
        <Styled.NavigationWrapper>
          <Styled.WrapperForMobile>
            <Styled.MenuButtonMobile onClick={toggleMenuMobile}>
              {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </Styled.MenuButtonMobile>
          </Styled.WrapperForMobile>

          <Styled.WrapperForDesktop>
            <Styled.LogoWrapper>
              <Styled.Logo src={ReactLogo} alt="React logo" />
            </Styled.LogoWrapper>

            <Styled.AnchorsWrapperDesktop>
              {appRoutes.map((route) => (
                <Styled.AnchorItemDesktop
                  key={route.path}
                  to={route.path}
                  className={cs({ selected: routeIsSelected(route) })}
                >
                  {route.label}
                </Styled.AnchorItemDesktop>
              ))}
            </Styled.AnchorsWrapperDesktop>
          </Styled.WrapperForDesktop>
        </Styled.NavigationWrapper>
      </Styled.Navigation>

      {mobileMenuOpen ? (
        <Styled.AnchorsWrapperMobile>
          {appRoutes.map((route) => (
            <Styled.AnchorItemMobile
              key={route.path}
              as="a"
              href={route.path}
              className={cs({ selected: routeIsSelected(route) })}
            >
              {route.label}
            </Styled.AnchorItemMobile>
          ))}
        </Styled.AnchorsWrapperMobile>
      ) : null}
    </>
  );
};

export default LayoutNavigation;
