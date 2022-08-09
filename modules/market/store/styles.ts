import { BigShopItem as shopItem } from "#/market";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const Content = styled.div`
  padding: 0 15px 30px;
  overflow-y: scroll;
`;

export const StyledMarket = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: ${theme.palette.platinum[98]};
  height: 100vh;
  overflow-y: hidden;
`;

export const ShopItem = styled(shopItem)`
  border-radius: 0 0 16px 16px;
  height: 260px;

  .top-container {
    padding: 10px 8px 8px;
  }

  .bottom-container {
    height: 35vh;
    padding: 8px 8px 0 !important;
    justify-content: space-between;
  }

  .shop {
    align-self: end;
    background: transparent;

    & div {
      width: 70px;
      height: 70px;
      border: none;
      background-color: ${theme.palette.platinum[100]};

      & div {
        height: 100%;
        width: 100%;
        background-color: ${theme.palette.platinum[95]};
      }
    }
  }
`;
