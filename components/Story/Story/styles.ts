import { mainColors } from "#/Layout";
import styled from "@emotion/styled";
import { Heart } from "@images";
import { theme } from "@theme";

export const Logo = styled.div<{ themeColor?: string }>`
  ${({ themeColor }): string =>
    themeColor === mainColors.blue
      ? `background-color: ${themeColor};`
      : `background-color: ${theme.palette.sunRay[100]};
      & * {
        background-color: ${theme.palette.sunRay[100]};
      }`};

  height: 60px;
  width: 60px;
  display: flex;
  padding: 3px;
  border-radius: 50% 5px 50% 50%;
`;

export const Container = styled.div`
  background-color: ${theme.palette.platinum[95]};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 3px;
  border-radius: 50%;
  border: solid 3px ${theme.palette.sunRay[100]};
`;

export const Story = styled.div<{ themeColor?: string }>`
  ${({ themeColor }): string => `background-color: ${themeColor};`};
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  height: 100%;
  width: 100%;
  animation-duration: 0.1s;
  user-select: none;
  & * {
    user-select: none;
  }

  @keyframes open {
    0% {
      top: 50%;
      right: 50%;
      height: 0;
      width: 0;
    }
    100% {
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;
    }
  }

  @keyframes close {
    0% {
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;
    }
    100% {
      top: 50%;
      right: 50%;
      height: 0;
      width: 0;
    }
  }
`;

export const StoryLineContainer = styled.div`
  display: flex;
  column-gap: 4px;
  width: 100%;
  height: 2px;
  align-items: stretch;
`;

export const StoryLine = styled.div`
  flex-grow: 1;
  width: 100%;
  // background-color: ${theme.palette.platinum[90]};
  border-radius: 2px;
`;

export const StoryLineFill = styled.div`
  background-color: ${theme.palette.platinum[100]};
  height: 100%;
  width: 0;

  border-radius: 2px;

  animation-duration: 15s;
  animation-timing-function: linear;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;

  &.active {
    animation-name: onChangeAnimation;
  }

  @keyframes onChangeAnimation {
    0% {
      width: 0;
    }
    50% {
      width: 50%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const Container1 = styled.div`
  width: 100%;
  display: flex;
  color: ${theme.palette.platinum[100]};
  font-size: 13px;
  font-weight: 700;
  justify-content: space-between;

  & .story {
    background-color: ${theme.palette.platinum[100]};
    & div {
      background-color: ${theme.palette.platinum[100]};
    }
  }
`;

export const Like = styled(Heart)`
  position: absolute;
  bottom: 40px;
  width: 22px;
  height: 22px;
  left: calc(50% - 11px);
`;
