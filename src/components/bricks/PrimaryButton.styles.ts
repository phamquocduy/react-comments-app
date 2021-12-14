import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 6px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  border: 1px solid transparent;
  color: white;
  background-color: var(--blue-dark-1);

  :hover {
    background-color: var(--blue-1);
    cursor: pointer;
  }
`;
