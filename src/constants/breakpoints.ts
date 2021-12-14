export const screenSizes = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export const devices = {
  sm: `min-width: ${screenSizes.sm}`,
  md: `min-width: ${screenSizes.md}`,
  lg: `min-width: ${screenSizes.lg}`,
  xl: `min-width: ${screenSizes.xl}`,
};

export default { screenSizes, devices };
