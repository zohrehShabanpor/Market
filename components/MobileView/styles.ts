import styled from "@emotion/styled";
import { theme } from "@theme";

export const Main = styled.main`
  max-width: 500px;
  max-height: 1000px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
  background-color: ${theme.palette.platinum[100]};
  box-shadow: 0 10px 45px 15px ${theme.palette.platinum[80]};

  @media only screen and (min-width: 600px) {
    border-radius: 40px;
  }
`;

export const Container = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${theme.palette.platinum[95]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
