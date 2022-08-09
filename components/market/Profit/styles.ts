import { ShopButton as shopButton } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const Discount = styled.div<{ size: 1 | 2 }>`
  ${({ size }): string =>
    size === 2
      ? `
        padding: 3px 4px 0;
        height: 17px;
        font-size: 13px;
        & span {
          margin-right: 2px;
          margin-bottom: 2px;
        }
      `
      : `
        padding: 2px 4px;
        height: 18px;
        font-size: 13px;
      
        & span {
          margin-right: 3px;
        }
      `}

  font-weight: 600;
  align-items: center;
  display: flex;
  border-radius: 4px;
  background-color: ${theme.palette.coralRed[100]};
  color: ${theme.palette.platinum[100]};
  & span {
    font-weight: 800;
  }
`;
