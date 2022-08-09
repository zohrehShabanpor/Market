import styled from "@emotion/styled";
import { theme } from "@theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${theme.palette.paleGreen[100]};

  & svg {
    width: 14px !important;
    height: 14px !important;
  }
`;
