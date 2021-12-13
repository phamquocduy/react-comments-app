import React from "react";
import PropTypes from "prop-types";

import * as Styled from "./OutlineButton.styles";

export const OutlineButton = ({ type = "button", ...props }) => {
  return <Styled.Button type={type} {...props} />;
};

OutlineButton.propTypes = {
  type: PropTypes.string,
};
