import { Banner as banner } from "#";
import { CategoryHeader as categoryHeader } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const Content = styled.div`
  padding: 0 15px 0;
  height: calc(100% - 100px);
  overflow-y: scroll;
`;

export const ShopContainer = styled.div`
  display: flex;
  column-gap: 10px;
  overflow-x: scroll;
`;

export const StyledMarket = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: ${theme.palette.platinum[98]};
  height: 100%;
`;

export const CategoryHeader = styled(categoryHeader)`
  margin-top: 8px;
`;

export const Banner = styled(banner)`
  background-color: ${theme.palette.sunRay[100]};
  color: ${theme.palette.paleGreen[100]};
  margin-top: 25px;
  font-size: 30px;
  height: 100px;
`;
