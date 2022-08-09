import styled from "@emotion/styled";
import { theme } from "@theme";
import { ShopButton as shopButton, Button as button } from "#";

export const StyledItem = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  column-gap: 8px;
  padding: 8px;
  border: 1px solid ${theme.palette.platinum[80]};
  border-radius: 12px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
  column-gap: 8px;
`;

export const Title = styled.div`
  color: ${theme.palette.darkGunmetal[100]};
  font-size: 14px;
  font-weight: 800;
  height: 100%;
`;

export const ImageContainer = styled.div`
  border: 1px solid ${theme.palette.platinum[80]};
  border-radius: 6px;
  width: 90px;
  height: 104px;
`;

export const Image = styled.img``;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

export const DiscountContainer = styled.div`
  height: 100%;
  display: flex;
  column-gap: 8px;
  align-items: center;
  & .price {
    color: ${theme.palette.platinum[80]};
    font-weight: 700;
    fon-size: 11px;
    text-decoration: line-through;
  }
`;

export const PriceContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  row-gap: 3px;

  & span {
    display: flex;
    align-items: end;
    column-gap: 3px;

    & span {
      color: ${theme.palette.platinum[80]};
      font-weight: 700;
      font-size: 10px;
    }
  }
`;

export const Price = styled.div`
  color: ${theme.palette.darkGunmetal[100]};
  font-size: 16px;
  font-weight: 800;
  line-height: 14px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  align-self: end;
`;

export const ShopButton = styled(shopButton)`
  height: 30px;
`;

export const ButtonMojudi = styled(button)`
  color: ${theme.palette.darkGunmetal[100]};
  background-color: ${theme.palette.sunRay[100]};
  border-radius: 10px;
  width: 86px;
  height: 30px;
  font-size: 10px;
  padding: 0 4px;
  column-gap: 3px;

  .icon-container {
    width: 14px;
    height: 14px;
    position: static;
    background-color: transparent;
    border-radius: 0;
    padding: 0;
    margin: 0;
    & svg {
      width: 100%;
      height: 100%;
    }
  }

  :nth-of-type(2) {
    & svg {
      & path {
        fill: ${theme.palette.paleGreen[100]} !important;
      }
      & path:nth-of-type(2) {
        stroke: ${theme.palette.paleGreen[100]} !important;
      }
      & path:last-of-type {
        fill: ${theme.palette.platinum[100]} !important;
      }
    }
  }
`;

export const ButtonSearch = styled(button)`
  color: ${theme.palette.darkGunmetal[100]};
  font-size: 10px;
  .icon-container {
    width: 14px;
    height: 14px;
  }
  & svg {
    & path {
      fill: ${theme.palette.paleGreen[100]} !important;
    }
    & path:nth-of-type(2) {
      stroke: ${theme.palette.paleGreen[100]} !important;
    }
    & path:last-of-type {
      fill: ${theme.palette.platinum[100]} !important;
    }
  }
`;

export const Button2 = styled(button)`
  border-radius: 5px;
  width: fit-content;
  font-size: 9px;
  padding: 6px 7px;
  height: fit-content;
`;

export const Warn = styled.div`
  color: ${theme.palette.coralRed[90]};
  font-size: 8px;
  font-weight: 700;
`;
