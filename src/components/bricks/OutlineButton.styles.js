import styled from "styled-components";

import { Button as PrimaryButton } from "./PrimaryButton.styles";

export const Button = styled(PrimaryButton)`
  border-color: var(--gray-1);
  color: var(--black);
  background-color: white;

  :hover {
    background-color: var(--gray-light-1);
  }
`;
