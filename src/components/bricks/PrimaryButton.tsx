import React, { MouseEventHandler } from "react";

import * as Styled from "./PrimaryButton.styles";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const PrimaryButton: React.FC<Props> = ({ children, type = "button", onClick }) => {
  return (
    <Styled.Button type={type} onClick={onClick}>
      {children}
    </Styled.Button>
  );
};
