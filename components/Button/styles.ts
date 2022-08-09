import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledButton = styled.div<{
  backColor?: string;
  outline: boolean;
  iconBackground: boolean;
}>`
  ${({ backColor }): string =>
    backColor
      ? `
      background-color: ${backColor};
      color: ${theme.palette.darkGunmetal[100]};
      border: none;
      `
      : `
      background-color: ${theme.palette.coralRed[90]};
      color: ${theme.palette.platinum[100]};
      border: none;
      cursor:pointer;
  `};

  user-select: none;
  width: 100%;
  height: 40px;
  border-radius: 20px 3px 20px 20px;
  font-size: 14px;
  font-weight: 900;
  line-height: 10px;
  & .icon-container {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    ${({ iconBackground }): string =>
      iconBackground === true
        ? `
          background-color: ${theme.palette.platinum[100]};
          `
        : `
          background-color:transparent;
        `}

    padding: 2px 5px 2px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 5px;

    & svg {
      height: 20px;
      width: 20px;
    }
  }

  ${({ backColor, outline }): string =>
    outline
      ? ` 
      background-color: ${theme.palette.platinum[100]}!important;
      color: ${backColor};
      border: 3px solid ${backColor};
      border-radius: 10px;
      width: 85px;
      height: 30px;
      font-size: 11px;
      padding: 0 4px;
      column-gap:3px;

     & .icon-container {
        width: 12px;
        height: 12px;
        position: static;
        background-color: transparent;
        border-radius: 0;
        padding: 0;
        margin: 0;
        & svg {
          width: 100%;
          height: 100%;
        }
      }
      `
      : ``};

  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
