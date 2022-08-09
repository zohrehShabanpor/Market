import styled from "@emotion/styled";
import { theme } from "@theme";

export const SwitchContainer = styled.div`
  width: 80px;
  height: 42px;
  background-color: ${theme.palette.sunRay[100]};
  border-radius: 21px 2px 21px 21px;
  padding: 4px;
  display: flex;
  position: relative;
`;

export const Thumb = styled.div`
  position: absolute;
  width: 35px;
  height: calc(100% - 8px);
  background-color: ${theme.palette.blueDeFrance[90]};
  border-radius: 21px 2px 21px 21px;

  animation-duration: 0.1s;
  animation-timing-function: linear;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;

  @keyframes moveLeft {
    0% {
      right: 4px;
      width: 35px;
    }
    50% {
      left: 4px;
      width: calc(100% - 8px);
    }
    100% {
      left: 4px;
      width: 35px;
    }
  }

  @keyframes moveRight {
    0% {
      left: 4px;
      width: 35px;
    }
    50% {
      left: 4px;
      width: calc(100% - 8px);
    }
    100% {
      right: 4px;
      width: 35px;
    }
  }
`;
