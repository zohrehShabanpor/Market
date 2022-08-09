import { Button as button } from "#";
import { BigShopItem } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const Content = styled.div`
  padding: 0 15px 0;
  height: calc(100% - 100px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const StyledMarket = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: ${theme.palette.platinum[98]};
  height: 100vh;
  overflow-y: hidden;
`;

export const Container1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 0 8px;
`;

export const Container2 = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const Container3 = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
  & span {
    font-weight: 900;
    font-size: 17px;
    color: ${theme.palette.paleGreen[100]};
  }

  .icon {
    width: 16px;
    height: 16px;
  }
  .arrow {
    margin-right: 5px;
    transform: rotate(270deg);
    width: 12px;
    height: 12px;
    & path {
      stroke: ${theme.palette.paleGreen[100]}!important;
    }
  }
`;

export const Title = styled.div`
  color: ${theme.palette.platinum[80]};
  font-weight: 900;
  font-size: 18px;
`;

export const Button = styled(button)`
  margin-top: 20px;
  color: ${theme.palette.platinum[100]};
  font-size: 18px;
`;

export const ShopItem = styled(BigShopItem)`
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
