import { Button as button } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledMarket = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: ${theme.palette.platinum[100]};
  padding: 30px 15px 0;
  overflow-y: scroll;
  height: calc(100% - 100px);
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  border-bottom: 3px solid ${theme.palette.platinum[95]};
`;

export const Container2 = styled.div`
  border: 2px solid ${theme.palette.platinum[95]};
  border-radius: 12px;
`;

export const Container3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px 6px 6px;
`;

export const Container4 = styled.div`
  display: flex;
  flex-direction: column;
  & div {
    font-size: 14px;
    font-weight: 700;
    color: ${theme.palette.darkGunmetal[100]};
  }
  & span {
    font-size: 14px;
    font-weight: 700;
    color: ${theme.palette.platinum[80]};
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: ${theme.palette.darkGunmetal[100]};
`;

export const Button = styled(button)`
  width: 80px;
  height: 34px;
  padding: 0 10px 0 4px;
  justify-content: space-between;

  & .icon-container {
    position: static;
    padding: 0;
    background-color: ${theme.palette.sunRay[100]};
  }
`;

export const Map = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${theme.palette.platinum[95]};
  border-radius: 12px 12px 0 0;
`;

export const Container5 = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 7px;
  border-bottom: 3px solid ${theme.palette.platinum[95]};
`;

export const Container6 = styled.div`
  border: 2px solid ${theme.palette.platinum[80]};
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;

  & svg {
    width: 35px;
  }

  &.active {
    border: 2px solid ${theme.palette.paleGreen[100]};
  }

  margin-bottom: 8px;
`;

export const Container7 = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    font-size: 14px;
    font-weight: 600;
    color: ${theme.palette.platinum[80]};
    margin-top: -4px;
  }
`;

export const DeActiveIcon = styled.div`
  border-radius: 50%;
  background-color: ${theme.palette.platinum[80]};
  width: 35px;
  height: 35px;
`;

export const Container8 = styled.div`
  padding: 5px 0 15px;
  border-bottom: 3px solid ${theme.palette.platinum[95]};
`;

export const Container9 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.palette.sunRay[100]};
  padding: 10px 14px;
  border-radius: 14px;

  & svg {
    height: 20px;
    & path {
      stroke: ${theme.palette.platinum[100]}!important;
    }
  }
`;

export const Container10 = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    font-size: 12px;
    font-weight: 600;
    color: ${theme.palette.darkGunmetal[100]};
  }
`;

export const Container11 = styled.div`
  display: flex;
  column-gap: 20px;
  position: absolute;
  width: 100%;
  right: 0;
  padding: 15px 15px 40px;
  background: ${theme.palette.platinum[100]};
  bottom: 0;
`;

export const Container12 = styled.div`
  display: flex;
  padding: 5px 0 15px;
  border-bottom: 3px solid ${theme.palette.platinum[95]};
`;

export const TextInput = styled.textarea`
  border-radius: 12px;
  font-weight: 700;
  padding: 6px;
  width: 100%;
  color: ${theme.palette.platinum[80]};
  border: 1px solid ${theme.palette.platinum[80]};
  outline: none;

  ::placeholder {
    color: ${theme.palette.platinum[80]};
  }
`;
