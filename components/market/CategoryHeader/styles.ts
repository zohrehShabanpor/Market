import styled from "@emotion/styled";
import { theme } from "@theme";
import { Arrow as arrow } from "@images";

export const StyledCategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 6px 0;
  position: relative;
`;

export const Title = styled.div`
  color: ${theme.palette.platinum[80]};
  font-size: 16px;
  font-weight: 800;
`;

export const Span = styled.span`
  color: ${theme.palette.paleGreen[100]};
  font-size: 14px;
  font-weight: 800;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  user-select: none;
`;

export const Arrow = styled(arrow)`
  height: 10px;
  & path {
    stroke: ${theme.palette.paleGreen[100]}!important;
  }
`;
