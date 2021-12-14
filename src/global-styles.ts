import styled, { createGlobalStyle, css } from "styled-components";

import breakpoints from "./constants/breakpoints";

const GlobalStyles = createGlobalStyle`
  html {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  body {
    margin: 0px;
    padding: 0px;
  }

  :root {
    /* colors */
    --gray-1: rgb(156, 163, 175);
    --gray-dark-1: rgb(107, 114, 128);
    --gray-light-1: rgb(243, 244, 246);
    --black: black;
    --blue-1: rgb(99, 102, 241);
    --blue-dark-1: rgb(67, 56, 202);
    --blue-light-1: rgb(238, 242, 255);
  }
`;

export const ContentMaxWidthStyle = css`
  max-width: ${breakpoints.screenSizes.xl};
`;

export const XMarginAutoStyle = css`
  margin-left: auto;
  margin-right: auto;
`;

/* does produce "perfect 1/4 circle" corners */
export const CircleCornersStyle = css`
  border-radius: 9999px;
`;

export const ContentWrapperStyle = styled.div`
  padding: 0px 16px;
  text-align: center;

  @media (${breakpoints.devices.lg}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const TitleWrapperStyle = styled.div`
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

export default GlobalStyles;
