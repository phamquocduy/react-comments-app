import React, { MouseEventHandler } from "react";

import * as Styled from "./OutlineButton.styles";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const OutlineButton: React.FC<Props> = ({ children, onClick }) => {
  return <Styled.Button onClick={onClick}>{children}</Styled.Button>;
};
