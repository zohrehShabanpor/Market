import { mainColors } from "#/Layout";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledBottomNavigationAction = styled.div<{
  active: boolean;
  themeColor: string;
}>`
  cursor: pointer;
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ active, themeColor }): string =>
    active === true
      ? `background-color: ${themeColor} ;
      & span{
        color:${theme.palette.sunRay[100]};
      }`
      : `background-color:${theme.palette.platinum[100]};
       & span{
        color:${theme.palette.darkGunmetal[100]};
      }`}
  border-radius: 30px 3px 30px 30px;
`;

export const Item = styled.span`
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-weight: 800;
`;
