import {
  Button as button,
  DateTime as dateTime,
  CategoryHeader,
  Title as title,
  Offcanvas as offcanvas,
} from "#";
import styled from "@emotion/styled";
import { Arrow as arrow } from "@images";
import { theme } from "@theme";

export const Content = styled.div`
  height: 100%;
`;

export const StyledMarket = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: ${theme.palette.platinum[100]};
  height: 100%;
  position: relative;
`;

export const Arrow = styled(arrow)`
  position: absolute;
  height: 24px;
  right: 35px;
  top: 23px;
  transform: rotate(180deg);
  z-index: 100;
  & path {
    stroke: ${theme.palette.paleGreen[100]}!important;
  }
`;

export const Offcanvas = styled(offcanvas)``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & button {
    opacity: 1;
    outline: none;
  }
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0 12px;
  row-gap: 8px;
  border-bottom: 3px solid ${theme.palette.platinum[95]};
`;

export const Text1 = styled.div`
  font-weight: 600;
  font-size: 17px;
  & span {
    font-weight: 900;
  }
`;

export const Text2 = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: ${theme.palette.platinum[80]};
`;

export const Text3 = styled.div`
  font-weight: 600;
  font-size: 17px;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  padding: 12px 0;
  row-gap: 12px;
  border-bottom: 3px solid ${theme.palette.platinum[95]};
`;

export const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  padding: 12px 0;
  margin-bottom: 10px;
  row-gap: 3px;
  border-bottom: 3px dashed ${theme.palette.platinum[95]};
`;

export const Container4 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.palette.platinum[100]};
  border: 2px solid ${theme.palette.platinum[80]};
  width: 100%;
  border-radius: 12px;
  padding: 5px 8px;
`;

export const ItemContainer1 = styled.div`
  display: flex;
  column-gap: 4px;
`;

export const ItemTitle = styled.div`
  font-weight: 600;
`;

export const ItemCount = styled.div``;

export const Container5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4px 0;
  font-weight: 600;

  &.total {
    font-weight: 900;
    font-size: 18px;
  }
`;

export const Button = styled(button)`
  margin: 25px 0 60px;
  width: 100%;
  font-size: 17px;
  height: fit-content;
  padding: 12px 0 10px;
  border-radius: 20px 3px 20px 20px;

  & .icon-container {
    position: absolute;
    width: 22px;
    height: 22px;
    left: 0;
  }
`;
export const Container6 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 0;
  border-bottom: 3px solid ${theme.palette.platinum[95]};
`;

export const Container7 = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3px;
  color: ${theme.palette.platinum[80]};
  font-weight: 700;

  & svg {
    width: 16px;
    height: 16px;
  }
`;

export const DateTime = styled(dateTime)`
  & * {
    font-size: 12px;
    color: ${theme.palette.darkGunmetal[100]};
  }

  & svg {
    width: 12px !important;
    height: 12px !important;
  }
`;

export const ReseedHeader = styled(CategoryHeader)`
  & div {
    font-size: 18px;
    color: ${theme.palette.darkGunmetal[100]};
  }

  & span {
    font-size: 16px;
  }
`;

export const Title = styled(title)`
  font-size: 13px;
`;

export const Container8 = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  width: 100%;
  padding: 0 10px;
`;
