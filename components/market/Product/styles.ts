import shopButton from "../ShopButton";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  border-radius: 12px;
  box-shadow: 0 0 12px ${theme.palette.platinum[95]};
  background-color: ${theme.palette.platinum[100]};
  position: relative;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  row-gap: 3px;
`;

export const Container3 = styled.div`
  display: flex;
  align-items: start;
  column-gap: 5px;
`;

export const ImageContainer = styled.div`
  width: 110px;
  height: 90px;
  background-color: ${theme.palette.platinum[95]};
  border-radius: 10px 10px 0 0;

  & img {
    border-radius: 10px 10px 0 0;

    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Text1 = styled.div`
  color: ${theme.palette.darkGunmetal[100]};
  font-weight: 900;
  font-size: 18px;
`;

export const Text2 = styled.div`
  color: ${theme.palette.platinum[80]};
  font-weight: 900;
  font-size: 14px;
  text-decoration: line-through;
`;

export const Text3 = styled.div`
  color: ${theme.palette.darkGunmetal[100]};
  font-weight: 900;
  font-size: 18px;
  & span {
    color: ${theme.palette.platinum[80]};
    font-weight: 900;
    font-size: 14px;
    margin-right: 3px;
  }
`;

export const Discount = styled.div`
  background-color: ${theme.palette.coralRed[100]};
  color: ${theme.palette.platinum[100]};
  font-size: 12px;
  height: 18px;
  padding: 0 6px;
  font-weight: 800;
  border-radius: 4px;
`;

export const ShopButton = styled(shopButton)`
  position: absolute;
  top: 4px;
  right: 4px;
`;
