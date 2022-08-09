import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;

export const Container = styled.div`
  width: 105px;
  height: 105px;
  display: flex;
  border-radius: 50%;
  background-color: ${theme.palette.platinum[90]};
  align-items: center;
  justify-content: center;
`;
