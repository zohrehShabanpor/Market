import { Button as button, CategoryHeader as categoryHeader } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const CategoryHeader = styled(categoryHeader)`
  margin-top: 15px;
`;

export const ProductContainer = styled.div`
  row-gap: 20px;
  overflow-y: scroll;
`;

export const CategoryContainer = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
  font-weight: 800;
  color: ${theme.palette.paleGreen[100]};
  align-self: end;
  float: left;

  & .arrow {
    transform: rotate(270deg);
    width: 10px;
    height: 10px;
    & path {
      stroke: ${theme.palette.paleGreen[100]}!important;
    }
  }

  & svg {
    width: 18px;
    height: 18px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled(button)`
  margin-top: 20px;
  color: ${theme.palette.platinum[100]};
  font-size: 18px;
`;
