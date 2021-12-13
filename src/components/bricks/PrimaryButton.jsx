import React from "react";
import PropTypes from "prop-types";

import * as Styled from "./PrimaryButton.styles";

export const PrimaryButton = ({ children, type = "button", ...props }) => {
  return (
    <Styled.Button type={type} {...props}>
      {children}
    </Styled.Button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
};
