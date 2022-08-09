import styled from "@emotion/styled";
import { theme } from "@theme";

export const Banner1 = styled.div<{ themeColor: string }>`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: ${({ themeColor }): string => `${themeColor}`};
  color: ${theme.palette.sunRay[100]};
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 800;
  user-select: none;

  .first {
    margin-right: -90px;
  }

  .seconde {
    margin: -10px 0 0 -90px;
  }
`;
