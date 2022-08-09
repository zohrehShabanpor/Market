import { Button as button, IconButton as iconButton } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";
import { SwitchBox as switchBox } from "#";

export const StyledPost = styled.div`
  background-color: ${theme.palette.platinum[95]};
  height: 100%;
  position: relative;
`;

export const Container1 = styled.div`
  background-color: ${theme.palette.platinum[100]};
  border: solid 1px #bdbdbd;
  border-radius: 24px 24px 0 0;
  padding: 26px 14px 30px;
  height: 600px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  overflow-y: scroll;
`;

export const Button = styled(button)`
  font-weight: 800;
  font-size: 16px;
  color: ${theme.palette.blueDeFrance[90]};

  &:first-of-type {
    color: ${theme.palette.sunRay[100]};
  }

  &:nth-of-type(2) {
    .icon-container {
      padding: 0;
      & svg {
        width: 100%;
        height: 100%;
        & path {
          fill: ${theme.palette.blueDeFrance[90]}!important;
        }
      }
    }
  }
`;

export const IconButton = styled(iconButton)`
  & .icon-container {
    background-color: ${theme.palette.sunRay[100]};
    width: 100%;
    height: 100%;
    padding: 3px;

    & svg {
      & path {
        stroke: ${theme.palette.blueDeFrance[90]}!important;
      }
    }
  }

  width: 32px;
  height: 32px;
  padding: 0;
`;

export const Container3 = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - 30px);
  right: 15px;

  display: flex;
  flex-direction: column;
  row-gap: 16px;
  justify-content: end;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 0 12px;
  column-gap: 10px;
  height: 30px;
`;

export const Option = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 3px;
  border-bottom: 3px solid ${theme.palette.platinum[80]};
  color: ${theme.palette.platinum[80]};
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
  padding: 0 0 5px;

  & div {
    width: 15px;
    height: 15px;
    background-color: ${theme.palette.sunRay[100]};
    border-radius: 50%;
  }

  &.active {
    border-bottom: 4px solid ${theme.palette.blueDeFrance[90]};
    color: ${theme.palette.blueDeFrance[90]};
  }
`;

export const Container4 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0 16px;
  border-bottom: 2px solid ${theme.palette.platinum[80]};

  & span {
    color: ${theme.palette.blueDeFrance[90]};
    font-weight: 800;

    &:nth-of-type(2) {
      cursor: pointer;
    }
  }

  & div {
    color: ${theme.palette.darkGunmetal[100]};
    font-weight: 800;
    font-size: 28px;
    & span {
      color: ${theme.palette.platinum[80]};
      font-size: 14px;
      margin-right: 5px;
    }
  }
`;

export const Container5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container6 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 2px solid ${theme.palette.platinum[80]};
  font-weight: 800;
  font-size: 18px;

  & svg {
    height: 20px;
  }

  &:nth-child(5) {
    & svg {
      & path {
        &:nth-of-type(3) {
          fill: ${theme.palette.sunRay[100]} !important;
        }
      }
    }
  }
`;

export const Container7 = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  column-gap: 6px;
`;

export const Container8 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-top: 20px;
`;

export const SwitchBox = styled(switchBox)`
  &.first-switch {
    background-color: ${theme.palette.platinum[80]};
  }
`;
