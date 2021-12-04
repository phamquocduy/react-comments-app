import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.nav`
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.06);
`;

export const NavigationWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 64px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 8px;
  padding-right: 8px;

  @media (min-width: 640px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (min-width: 1024px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const WrapperForMobile = styled.div`
  top: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;

  @media (min-width: 640px) {
    display: none;
  }
`;

export const MenuButtonMobile = styled.button`
  background-color: transparent;
  height: 40px;
  width: 40px;
  cursor: pointer;
  border: none;
  padding: 8px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: rgba(243, 244, 246, 1);
  }
`;

export const WrapperForDesktop = styled.div`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    align-items: stretch;
    justify-content: flex-start;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  display: block;
  height: 48px;
  width: auto;
`;

export const AnchorsWrapperDesktop = styled.div`
  display: none;

  @media (min-width: 640px) {
    display: flex;
    margin-left: 24px;
  }
`;

export const AnchorItemDesktop = styled(Link)`
  color: rgb(128, 128, 128);
  margin-left: 16px;
  margin-right: 16px;
  display: inline-flex;
  align-items: center;
  padding-top: 4px;
  padding-left: 4px;
  padding-right: 4px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  text-decoration: none;

  :hover,
  &.selected {
    border-bottom: 2px solid blue;
    color: rgb(48, 48, 48);
  }
`;

export const AnchorsWrapperMobile = styled.div`
  padding-bottom: 16px;
  margin-top: 4px;
  margin-bottom: 4px;

  @media (min-width: 640px) {
    display: none;
  }
`;

export const AnchorItemMobile = styled.button`
  border-left: 4px solid transparent;
  color: rgb(107, 114, 128);
  display: block;
  padding: 8px 16px 8px 12px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  text-decoration: none;

  :hover {
    background-color: rgb(249, 250, 251);
    border-color: rgb(200, 200, 200);
    color: black;
  }

  &.selected {
    background-color: rgb(238, 242, 255);
    border-left: 4px solid rgb(99, 102, 241);
    color: rgb(67, 56, 202);
  }
`;
