import { mainColors } from "#/Layout";
import styled from "@emotion/styled";
import { Heart } from "@images";
import { theme } from "@theme";

export const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  row-gap: 4px;
  background: transparent;
`;

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
  border-radius: 50%;
`;

export const Container2 = styled.div<{ hasStory: boolean }>`
  background-image: linear-gradient(
    135deg,
    #ffce00,
    #ffce00,
    #b1ce3b,
    #32cd9a,
    #23b2ae,
    #037ad7
  );

  border-radius: 50%;
  padding: 2px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  color: ${theme.palette.darkGunmetal[100]};
  font-size: 9px;
  font-weight: 700;
  white-space: nowrap;
`;
