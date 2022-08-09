import { mainColors } from "#/Layout";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledNotification = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.palette.sunRay[100]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  & div {
    display: flex;
    align-items: center;
    font-size: 9px;
    font-weight: 800;
    line-height: 6px;
    height: 6px;
    margin-top: 2px;
  }
`;
