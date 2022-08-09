import { Button as button } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const ItemContainer8 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const ProgressBar = styled.div<{ percent: string }>`
  background-color: ${theme.palette.paleGreen[100]};
  height: 4px;
  width: ${({ percent }): string => (percent ? `${percent}` : `0`)};

  border-radius: 3px 0 0 3px;
`;

export const Progress = styled.div`
  position: absolute;
  background-color: ${theme.palette.platinum[95]};
  width: calc(100% - 160px);
  display: flex;
  align-items: center;
  left: 80px;
  height: 3px;
  z-index: 2;
`;

export const ButtonProgress = styled(button)`
  z-index: 3;
  width: 80px;
  height: fit-content;
  font-size: 10px;
  font-weight: 600;
  color: ${theme.palette.darkGunmetal[100]};
  padding: 2px 5px 2px 2px;
  justify-content: space-between;
  & span {
    & span {
      font-weight: 900;
      margin-right: 2px;
    }
  }

  & .icon-container {
    position: static;
    padding: 0;
    width: 16px;
    height: 16px;

    & svg {
      width: 100%;
      height: 100%;
    }
  }

  :nth-of-type(2) {
    & .icon-container {
      & svg {
        & path {
          fill: ${theme.palette.sunRay[100]} !important;
        }
        & path:nth-of-type(2) {
          stroke: ${theme.palette.paleGreen[100]} !important;
        }
      }
    }
  }
`;
