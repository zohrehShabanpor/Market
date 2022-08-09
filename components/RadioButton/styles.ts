import styled from "@emotion/styled";
import { theme } from "@theme";

export const RadioButton = styled.div<{ backColor?: string }>`
  width: 18px;
  height: 18px;

  border-radius: 50%;
  padding: 3px;

  ${({ backColor }): string =>
    backColor
      ? `background-color: ${backColor};`
      : `
  background-color: ${theme.palette.paleGreen[100]};
  `}
`;

export const RadioButtonInside = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.palette.platinum[100]};
  border-radius: 50%;
  border: 1px solid ${theme.palette.platinum[100]};

  &.active {
    background-color: ${theme.palette.sunRay[100]};
  }
`;
