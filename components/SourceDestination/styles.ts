import { Button as button } from "#";
import { mainColors } from "#/Layout";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const ItemContainer5 = styled.div`
  display: flex;
  align-items: stretch;
  column-gap: 6px;
  width: fit-content;
`;

export const ItemContainer6 = styled.div<{ themeColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;
  padding: 3px 0 4px;
  position: relative;
  width: fit-content;
  height: calc(100% - 16px);

  & svg {
    z-index: 3;
    width: 22px !important;
    height: 22px !important;

    :nth-of-type(1) {
      ${({ themeColor }): string =>
        themeColor === mainColors.green
          ? ``
          : `
          & path{
            fill: ${theme.palette.blueDeFrance[90]} !important;
            }
          `};
    }

    :nth-of-type(2) {
      & path {
        fill: ${theme.palette.sunRay[100]} !important;
        :nth-of-type(2) {
          ${({ themeColor }): string =>
            themeColor === mainColors.green
              ? `
                stroke: ${theme.palette.paleGreen[100]} !important;
              `
              : `
                stroke: ${theme.palette.blueDeFrance[90]} !important;
              `};
        }
      }
    }
  }
`;

export const ItemContainer7 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 10px;

  & span {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-size: 18px;
    font-weight: 900;
    color: ${theme.palette.darkGunmetal[100]};
  }
  .caption {
    font-size: 14px;
    height: 14px;
    font-weight: 600;
    color: ${theme.palette.platinum[80]};
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 22px;
  left: 10px;
  height: calc(100% - 44px);
  z-index: 2;
  width: 3px;
  background-image: linear-gradient(
    135deg,
    ${theme.palette.blueDeFrance[90]},
    ${theme.palette.sunRay[100]}
  );
  display: flex;
`;

export const LineFill = styled.div`
  width: 100%;
  height: 100%;
  border: 2px dashed ${theme.palette.platinum[100]};
`;
