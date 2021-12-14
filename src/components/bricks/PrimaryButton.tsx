import React from "react";

import * as Styled from "./PrimaryButton.styles";

interface Props {
  type: "button" | "submit" | "reset" | undefined;
}

export const PrimaryButton: React.FC<Props> = ({ children, type = "button", ...props }) => {
  return (
    <Styled.Button type={type} {...props}>
      {children}
    </Styled.Button>
  );
};
