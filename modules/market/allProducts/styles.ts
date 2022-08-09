import { Button as button, CategoryHeader as categoryHeader } from "#";
import { BigShopItem as shopItem } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const Content = styled.div`
  padding: 0 15px 30px;
  overflow-y: scroll;
`;

export const StyledMarket = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  row-gap: 10px;
  background-color: ${theme.palette.platinum[98]};
  height: calc(100% - 46px);
`;

export const ShopItem = styled(shopItem)`
  border-radius: 0 0 16px 16px;
  height: 15vh;

  .top-container {
    padding: 10px 8px 8px;
  }

  .bottom-container {
    height: 15vh;
    padding: 8px 8px 0 !important;
    justify-content: space-between;
    border-top: none;
  }

  .shop {
    align-self: end;
    & div {
      border: 3px solid ${theme.palette.sunRay[100]};
    }
  }
`;
