import { Button as button } from "#";
import styled from "@emotion/styled";

export const Button = styled(button)`
  cursor: pointer;
  width: fit-content;
  height: 28px;
  column-gap: 8px;
  padding: 6px 4px;
  border-radius: 14px 2px 14px 14px;
  & .icon-container {
    padding: 3px;
    position: static;
    width: 20px;
    height: 20px;
  }
`;
