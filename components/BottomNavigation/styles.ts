import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledBottomNavigation = styled.div`
  display: flex;
  align-items: center;
  padding: 3px;
  height: 60px;
  width: calc(100% - 70px);
  z-index: 100;
  position: absolute;
  bottom: 40px;
  background-color: ${theme.palette.platinum[100]};
  box-shadow: 1px solid #000000;
  border-radius: 30px 0 30px 30px;
  align-self: center;
  border: solid 1px #bdbdbd;
`;
