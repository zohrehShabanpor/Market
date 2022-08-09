import styled from "@emotion/styled";
import { theme } from "@theme";

export const Rate = styled.div<{ size: 1 | 2 }>`
  ${({ size }): string =>
    size === 2
      ? `font-size: 12px;
         padding: 0 6px 0 2px;
         height: 14px;
            width:40px;

          & svg {
            width: 8px;
            height: 8px;
          }
  `
      : `font-size: 9px;
         padding: 0 5px 0 3px;
         height: 11px;
         & svg {
            width: 6px;
            height: 6px;
          }
          `}

  font-weight: 800;
  background-color: ${theme.palette.paleGreen[100]};
  color: ${theme.palette.platinum[100]};
  justify-content: end;
  border-radius: 3px;
  display: flex;
  align-items: center;
  column-gap: 2px;

  & span {
    flex-grow: 1;
    text-align: center;
  }
`;
