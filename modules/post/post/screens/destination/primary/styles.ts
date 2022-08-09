import { Button as button, IconButton as iconButton } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledPost = styled.div`
  background-color: ${theme.palette.platinum[95]};
  height: 100%;
  position: relative;
`;

export const Container1 = styled.div`
  background-color: ${theme.palette.platinum[100]};
  border: solid 1px #bdbdbd;
  border-radius: 24px 24px 0 0;
  padding: 14px 14px 30px;
  height: calc(40px + 60px + 140px);
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  & span {
    &:first-child {
      color: ${theme.palette.platinum[80]};
      font-weight: 700;
      font-size: 18px;
      height: 22px;
    }
    &:nth-of-type(2) {
      height: 24px;
      display: flex;
      align-items: center;
      column-gap: 6px;
      color: ${theme.palette.darkGunmetal[100]};
      font-weight: 800;
      font-size: 26px;
      & span {
        width: 16px;
        height: 16px;
        display: block;
        background-color: ${theme.palette.blueDeFrance[100]};
        border-radius: 50%;
      }
    }
  }
`;

export const Button = styled(button)`
  color: ${theme.palette.sunRay[100]};
  font-weight: 700;
  font-size: 18px;
`;

export const IconButton = styled(iconButton)`
  & .icon-container {
    background-color: ${theme.palette.blueDeFrance[90]};
  }

  &:first-of-type {
    padding: 4px;
    width: 28px;
    & div {
      width: 100%;
      height: 100%;
      background: ${theme.palette.blueDeFrance[90]};
      border: 8px solid ${theme.palette.sunRay[100]};
      border-radius: 50%;
    }
    margin-left: 12px;
  }
  &:nth-of-type(4) {
    padding: 4px;
    & .icon-container {
      & svg {
        & path {
          stroke: ${theme.palette.sunRay[100]} !important;
        }
      }
    }
  }
`;

export const Container2 = styled.div`
  display: flex;
  column-gap: 4px;
  padding: 0 26px;
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
