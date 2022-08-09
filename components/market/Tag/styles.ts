import styled from "@emotion/styled";
import { theme } from "@theme";

export const ItemTitle = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: ${theme.palette.paleGreen[100]};
  display: flex;
  align-items: center;
  column-gap: 4px;
  user-select: none;
  border: 2px solid ${theme.palette.paleGreen[100]};
  border-radius: 4px;
  padding: 0 4px;
  height: 26px;
  white-space: nowrap;

  & svg {
    height: 16px;
    width: 16px;
    & path {
      stroke: ${theme.palette.paleGreen[100]}!important;
    }
  }
`;
