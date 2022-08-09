import {
  Notification as notification,
  Input as input,
  Button as button,
} from "#";
import changeButton from "../../ChangeButton";
import styled from "@emotion/styled";
import {
  ShoppingCard as shoppingCard,
  CheckHandle as checkHandle,
  Arrow as arrow,
} from "@images";
import { theme } from "@theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 18px;
  border-bottom: 2px solid ${theme.palette.platinum[80]};
`;

export const ShoppingCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;

  padding-left: 8px;
  border-left: 2px solid ${theme.palette.platinum[80]};
  &:hover {
    color: ${theme.palette.darkGunmetal[100]};
  }
`;

export const Notification = styled(notification)`
  position: absolute;
  top: 3px;
  left: 3px;
`;

export const ShoppingCard = styled(shoppingCard)`
  height: 22px;
`;

export const LocationTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 3px;
  position: relative;
  width: 100%;
  padding: 6px 5px;
`;

export const CheckHandle = styled(checkHandle)`
  width: 18px;
  height: fit-content;
`;

export const LocationTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${theme.palette.platinum[80]};
  margin-top: 2px;
`;

export const Arrow = styled(arrow)`
  position: absolute;
  left: 0;
  transform: rotate(270deg);
  width: 6px;
  & path {
    stroke: ${theme.palette.paleGreen[100]}!important;
  }
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container3 = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
`;

export const Container4 = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 10px 0 12px;
  border-bottom: 2px solid ${theme.palette.platinum[80]};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  font-size: 18px;
  color: ${theme.palette.darkGunmetal[100]};
  font-weight: 800;

  & svg {
    width: 14px;
    height: 14px;
    & path {
      fill: ${theme.palette.paleGreen[100]}!important;
    }
  }
`;

export const Input = styled(input)`
  & .input-container {
    height: 35px;
    & input {
      color: ${theme.palette.platinum[80]};
      font-weight: 800;
      font-size: 15px;
    }
  }
`;

export const ChangeButton = styled(changeButton)`
  & .icon-container {
    & svg {
      & path {
        stroke: ${theme.palette.platinum[100]}!important;
      }
    }
  }
`;

export const Container2 = styled.div`
  display: flex;
  column-gap: 5px;
  margin-top: 70px;
`;

export const Button = styled(button)`
  :first-of-type {
    color: ${theme.palette.platinum[100]};
  }

  :nth-of-type(2) {
    color: ${theme.palette.sunRay[100]};

    & .icon-container {
      width: 24px;
      height: 24px;
      background-color: ${theme.palette.blueDeFrance[100]};

      & svg {
        & path {
          stroke: ${theme.palette.sunRay[100]}!important;
          fill: ${theme.palette.sunRay[100]}!important;
        }
      }
    }
  }
`;
