import { mainColors } from "#/Layout";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const ItemTitle = styled.div<{ themeColor: string }>`
  font-size: 15px;
  font-weight: 800;
  color: ${theme.palette.darkGunmetal[100]};
  display: flex;
  column-gap: 4px;
  user-select: none;

  & svg {
    height: 22px;
    width: 22px;
  }

  ${({ themeColor }): string =>
    themeColor === mainColors.green
      ? ``
      : `
      & svg{
        & path{
          &:nth-of-type(1){
            fill:${theme.palette.blueDeFrance[90]} !important;         
          }
      }
    }
  `};
`;
