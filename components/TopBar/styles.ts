import styled from "@emotion/styled";
import { theme } from "@theme";
import { Menu as menu } from "@images";
import { mainColors } from "#/Layout";

export const Offcanvas = styled.div`
  width: calc(100% - 30px);
  height: 70vh;
  align-self: center;
  right: 15px;
  border: solid 1px #bdbdbd;
  border-radius: 12px 12px 0 0;

  & .button-container {
    & .icon-container {
      & svg {
        & path {
          stroke: ${theme.palette.coralRed[90]}!important;
        }
      }
    }
  }
`;

export const ItemContainer = styled.div<{ themeColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: solid 1px #bdbdbd;

  & svg {
  }

  & .arrow {
    width: 20px;
    height: 20px;

    & path {
      stroke: ${({ themeColor }): string => `${themeColor}`}!important;
    }
  }
`;

export const ItemContainerSecondary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  column-gap: 5px;
  & svg {
    width: 24px;
    height: 24px;
    & path {
      fill: ${theme.palette.sunRay[100]};
      stroke: none !important;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;

  & a {
    & svg {
      & path {
        stroke: ${theme.palette.coralRed[90]}!important;
      }
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 5px;
`;

export const ProfileName = styled.span`
  font-weight: 800;
`;

export const Header = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  & button {
    opacity: 1;
    outline: none;
  }
`;

export const ItemTitle = styled.span<{ themeColor: string }>`
  color: ${({ themeColor }): string => `${themeColor}`};
  flex-grow: 1;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
`;

export const Logo = styled.img`
  height: 30px;
  width: 120px;
  object-fit: contain;
`;

export const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const Menu = styled(menu)`
  width: 35px !important;
  height: 35px !important;
`;

export const StyledTopBar = styled.header<{ themeColor: string }>`
  display: flex;
  align-items: center;
  height: 40px;
  flex-shrink: 0;
  background-color: ${theme.palette.platinum[100]};
  column-gap: 10px;
  margin-top: 20px;

  svg {
    & path {
      ${({ themeColor }): string => `
      fill:${themeColor}!important;
      stroke :${themeColor}!important;
      `};
    }
  }

  ${({ themeColor }): string =>
    themeColor === mainColors.brightBlue
      ? `
        justify-content: space-between;
        padding: 0 50px 20px;
      `
      : `
        justify-content: center;
        border-bottom: solid 2px #bdbdbd;
        padding: 0 20px 20px;
      `};

  .input-container {
    svg {
      & path {
        ${({ themeColor }): string => `
      fill:${themeColor}!important;`}
        stroke:none!important;
      }
      & path:nth-of-type(2) {
        stroke: ${({ themeColor }): string => `${themeColor}`} !important;
      }
      & path:last-of-type {
        fill: ${theme.palette.sunRay[100]} !important;
      }
    }
  }
`;
