import { createGlobalStyle } from "styled-components";

// This becomes the source of truth for the application
const GlobalStyles = createGlobalStyle`
  html {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    line-height: 1.5;
  }

  body {
    margin: 0;
    padding: 0;
  }

  :root {
    /* colors */
    --gray-1: rgb(156, 163, 175);
    --gray-dark-1: rgb(107, 114, 128);
    --gray-light-1: rgb(243, 244, 246);
    --black: black;
    --blue-1: rgb(67, 56, 202);
    --blue-dark-1: rgb(99, 102, 241);
    --blue-light-1: rgb(238, 242, 255);
  }
`;

export default GlobalStyles;
