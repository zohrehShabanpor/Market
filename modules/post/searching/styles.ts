import { Button as button } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledPost = styled.div`
  background-color: ${theme.palette.platinum[100]};
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container1 = styled.div`
  background-color: ${theme.palette.sunRay[100]};
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;
  border-radius: 0 0 22px 22px;

  & span {
    &:first-of-type {
      color: ${theme.palette.darkGunmetal[100]};
      font-weight: 800;
      font-size: 20px;
      padding-top: 80px;
    }
    &:nth-of-type(2) {
      color: ${theme.palette.blueDeFrance[90]};
      font-weight: 800;
      font-size: 30px;
      padding-top: 130px;
    }
  }
`;

export const Button = styled(button)<{ counter?: number }>`
  color: ${theme.palette.sunRay[100]};

  font-weight: 800;
  font-size: 18px;
  border-radius: 20px 3px 20px 20px !important;

  .icon-container {
    padding: 0;
    width: 26px;
    height: 26px;

    & svg {
      width: 100%;
      height: 100%;
      & path {
        fill: ${theme.palette.blueDeFrance[90]}!important;
      }
    }
  }

  &:nth-of-type(2) {
    background-color: ${theme.palette.platinum[100]};
    color: ${theme.palette.coralRed[90]};

    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    border: 3px solid ${theme.palette.coralRed[90]};
  }

  @keyframes close {
    0% {
      background-color: ${theme.palette.platinum[100]};
      color: ${theme.palette.coralRed[90]};
    }
    50% {
      color: ${theme.palette.platinum[100]};
    }
    100% {
      background-color: ${theme.palette.coralRed[90]};
      color: ${theme.palette.platinum[100]};
    }
  }
`;

export const Container2 = styled.div`
  display: flex;
  column-gap: 6px;
  row-gap: 12px;
  flex-wrap: wrap;
  width: 100%;
  padding: 40px 32px 0;
`;
