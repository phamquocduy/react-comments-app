import React from "react";
import PropTypes from "prop-types";

import * as Styled from "./PrimaryButton.styles";

export const PrimaryButton = ({ children, type = "button" }) => {
  return <Styled.Button type={type}>{children}</Styled.Button>;
};

PrimaryButton.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
};
