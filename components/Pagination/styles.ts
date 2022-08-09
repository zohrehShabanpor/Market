import styled from "@emotion/styled";
import { theme } from "@theme";

export const Pagination = styled.div<{ background: string }>`
  position: absolute;
  ${({ background }): string => `background-color:${background};`}
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  width: 65px;
  height: 10px;
  border-radius: 5px 0 5px 5px;
  bottom: 6px;

  & span {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${theme.palette.platinum[100]};
    &.active {
      background-color: ${theme.palette.sunRay[100]};
    }
  }
`;
