import { mainColors } from "#/Layout";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const ItemContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
`;

export const Date = styled.div<{ themeColor?: string }>`
  font-size: 13px;
  font-weight: 800;
  display: flex;
  align-items: center;
  column-gap: 2px;
  & svg {
    height: 12px;
    width: 12px;
  }

  ${({ themeColor }): string =>
    themeColor === mainColors.green
      ? ``
      : `
      & svg{
          & path{
            :nth-of-type(1){
              stroke:${theme.palette.blueDeFrance[90]} !important;
              fill:${theme.palette.blueDeFrance[90]} !important;
            } 
            :nth-of-type(2){
              stroke:${theme.palette.blueDeFrance[90]} !important;
              fill:${theme.palette.blueDeFrance[90]} !important;
          } 
        }
      }
      `};
`;

export const Time = styled.div<{ themeColor?: string }>`
  font-size: 13px;
  font-weight: 800;
  display: flex;
  align-items: center;
  column-gap: 2px;
  & svg {
    height: 12px;
    width: 12px;
  }

  ${({ themeColor }): string =>
    themeColor === mainColors.green
      ? ``
      : `
      & svg{
        & path{
          fill:${theme.palette.blueDeFrance[90]} !important;         
      }
    }
  `};
`;
