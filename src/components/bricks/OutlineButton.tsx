import React from "react";

import * as Styled from "./OutlineButton.styles";

interface Props {
  type: "button" | "submit" | "reset" | undefined;
}

export const OutlineButton: React.FC<Props> = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};
