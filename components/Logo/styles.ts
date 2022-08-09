import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledLogo = styled.div`
  background-color: ${theme.palette.blueDeFrance[100]};
  height: 30px;
  width: 80px;
  display: flex;
  padding: 3px 3px;
  border-radius: 15px 0 15px 15px;
  & svg {
    height: 100%;
    width: 20px;
    border-radius: 15px 0 0 15px;
    fill: ${theme.palette.sunRay[100]};
  }
`;
