import { Button as button } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";
import {
  CircleCheck as circleCheck,
  CircleDots as circleDots,
  Clock,
} from "@images";

export const PaymentContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  justify-content: center;
  width: calc(100% - 30px);
  height: 200px;
  bottom: 0;
  background-color: ${theme.palette.platinum[100]};
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 18px 18px 0 0;
  padding: 18px 12px 0;
  border: 2px solid ${theme.palette.platinum[80]};
  row-gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const Container2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;

  & svg {
    width: 44px;
    height: 44px;
  }
`;

export const ShopContainer = styled.div`
  height: calc(100% - 220px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Main = styled.div`
  height: 100%;
`;

export const Button = styled(button)`
  border-radius: 12px;
  width: 100%;
  height: 35px;
`;

export const Button2 = styled(button)`
  background-color: ${theme.palette.blueDeFrance[90]};
  color: ${theme.palette.sunRay[100]};
  width: 100%;
  font-size: 18px;
`;

export const Container3 = styled.div`
  display: flex;
  column-gap: 4px;
  padding-top: 15px;
`;

export const Button3 = styled(button)`
  width: 100%;
  border-radius: 20px 3px 20px 20px;
  font-size: 16px;
  font-weight: 900;
  height: 40px;

  &:nth-of-type(1) {
    color: ${theme.palette.sunRay[100]};
  }
`;

export const Container4 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  justify-content: start;
  width: calc(100% - 30px);
  height: 120px;
  bottom: 0;
  background-color: ${theme.palette.platinum[100]};

  & .button {
    background-color: ${theme.palette.paleGreen[100]};
    color: ${theme.palette.platinum[100]};
  }
`;

export const Container5 = styled.div`
  height: calc(100% - 130px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const CircleCheck = styled(Clock)`
  & path {
    fill: ${theme.palette.blueDeFrance[90]}!important;
  }
`;

export const CircleDots = styled(Clock)`
  & path {
    fill: ${theme.palette.paleGreen[80]}!important;
  }
`;
