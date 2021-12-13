import styled from "styled-components";

import breakpoints from "../../../constants/breakpoints";
import { ContentMaxWidthStyle, XMarginAutoStyle, CircleCornersStyle } from "../../../global-styles";

export const Wrapper = styled.div`
  padding: 0px 16px;
  text-align: center;

  @media (${breakpoints.devices.lg}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const TitleWrapper = styled.div`
  display: inline;
  margin-top: 20px;
  margin-bottom: 0px;

  @media (${breakpoints.devices.sm}) {
    margin: 16px auto 0px auto;
    max-width: 576px;
  }

  @media (${breakpoints.devices.lg}) {
    max-width: ${breakpoints.screenSizes.lg};
  }

  h2 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 800;
    letter-spacing: -0.025em;

    @media (${breakpoints.devices.sm}) {
      font-size: 36px;
      line-height: 40px;
    }
  }

  p {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const UserList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 16px;
  row-gap: 32px;
  padding: 0px;
  list-style-type: none;
  ${XMarginAutoStyle}

  @media (${breakpoints.devices.sm}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (${breakpoints.devices.md}) {
    column-gap: 24px;
  }

  @media (${breakpoints.devices.lg}) {
    max-width: ${breakpoints.screenSizes.lg};
    column-gap: 32px;
    row-gap: 48px;
  }

  @media (${breakpoints.devices.xl}) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    ${ContentMaxWidthStyle}
  }
`;

export const UserWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 0px;
`;

export const UserImage = styled.img`
  border: 2px solid transparent;
  height: 80px;
  width: 80px;
  ${CircleCornersStyle}
  ${XMarginAutoStyle}

  :hover {
    border-color: var(--blue-1);
    cursor: pointer;
  }

  @media (${breakpoints.devices.lg}) {
    width: 96px;
    height: 96px;
  }
`;

export const UserDesc = styled.div`
  margin-top: 8px;
  margin-bottom: 0px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;

  @media (${breakpoints.devices.lg}) {
    font-size: 14px;
    line-height: 20px;
  }
`;
