import { Button as button } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const Button = styled(button)`
  width: 80px;
  height: 34px;
  padding: 0 10px 0 4px;
  justify-content: space-between;

  & .icon-container {
    position: static;
    padding: 0;
    background-color: ${theme.palette.sunRay[100]};
    & svg {
      & path {
        stroke: ${theme.palette.platinum[100]}!important;
      }
    }
  }
`;
