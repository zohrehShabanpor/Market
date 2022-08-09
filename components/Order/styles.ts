import { Button as button } from "#";
import { mainColors } from "#/Layout";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const ItemContainer = styled.div`
  width: 100%;
  border: 2px solid ${theme.palette.platinum[80]};
  border-radius: 12px;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const ItemContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
`;

export const ItemContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.palette.platinum[95]};
  border-radius: 15px;
  padding: 2px;
`;

export const ItemContainer13 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  padding: 10px 10px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 8px;

  & div {
    color: ${theme.palette.platinum[40]};
    font-weight: 700;
    font-size: 14px;
  }

  & span {
    display: flex;
    column-gap: 3px;
    align-items: center;
    font-weight: 900;
    font-size: 14px;
    & span {
      color: ${theme.palette.platinum[40]};
      font-size: 11px;
    }
  }
`;

export const ItemContainer4 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;

  & svg {
    width: 42px;
    height: 42px;
  }
`;

export const ItemContainer5 = styled.div`
  display: flex;
  align-items: stretch;
  column-gap: 6px;
`;

export const ItemContainer6 = styled.div<{ themeColor?: string }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  row-gap: 20px;
  padding: 3px 0 4px;
  position: relative;

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
    font-size: 18px;
    font-weight: 900;
    color: ${theme.palette.darkGunmetal[100]};
  }
`;

export const ItemContainer10 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.palette.platinum[100]};
  border-radius: 0 0 15px 15px;
  padding: 8px 3px 5px 8px;
`;

export const ItemContainer11 = styled.div`
  display: flex;
  align-items: center;

  column-gap: 4px;
  & span {
    color: ${theme.palette.platinum[40]};
    font-weight: 700;
    font-size: 16px;
  }

  & svg {
    width: 22px;
    height: 22px;
  }
`;

export const Line = styled.img`
  position: absolute;
  top: 22px;
  left: 10px;
  height: 25px;
  z-index: 2;
`;
