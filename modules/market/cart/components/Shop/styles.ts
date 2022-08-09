import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledShop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  padding-bottom: 4px;
  border-bottom: 3px solid ${theme.palette.platinum[95]};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3px;
  row-gap: 8px;
  margin-top: 10px;
`;
