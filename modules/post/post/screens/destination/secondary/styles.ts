import { Button as button, TextArea as textArea, Input as input } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledPost = styled.div`
  background-color: ${theme.palette.platinum[95]};
  height: 100%;
  position: relative;
`;

export const Container1 = styled.div`
  background-color: ${theme.palette.platinum[100]};
  border: solid 1px #bdbdbd;
  border-radius: 24px 24px 0 0;
  padding: 14px 14px 30px;
  height: 550px;
  overflow-y: scroll;

  & span {
    margin: 10px 0;
    &:first-child {
      color: ${theme.palette.platinum[80]};
      font-weight: 700;
      font-size: 18px;
      height: 22px;
    }
    &:nth-of-type(2) {
      height: 24px;
      display: flex;
      align-items: center;
      column-gap: 6px;
      color: ${theme.palette.darkGunmetal[100]};
      font-weight: 800;
      font-size: 22px;
      & span {
        width: 14px;
        height: 14px;
        display: block;
        background-color: ${theme.palette.sunRay[100]};
        border-radius: 50%;
      }
    }
    &:nth-of-type(3) {
      color: ${theme.palette.platinum[80]};
      font-weight: 800;
      font-size: 18px;
    }
  }
`;

export const Button = styled(button)`
  color: ${theme.palette.sunRay[100]};
  font-weight: 700;
  font-size: 18px;
  margin-top: 15px;
  height: 40px;
`;

export const Container2 = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  & span {
    color: ${theme.palette.platinum[80]};
    font-weight: 700;
    font-size: 18px;
    width: 100%;
  }

  & .plus-item {
    width: calc(25% - 22px);
    margin: 0 5px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    border: 1px solid ${theme.palette.platinum[80]};

    & svg {
      height: calc(100% - 20px);
      & path {
        stroke: ${theme.palette.platinum[80]}!important;
      }
    }
  }
`;

export const Container3 = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - 30px);
  right: 15px;

  display: flex;
  flex-direction: column;
  row-gap: 16px;
  justify-content: end;
`;

export const Input = styled(input)`
  width: calc(50% - 8px);

  & .input-container {
    height: 45px;
    border-radius: 12px;
    padding: 0 3px 0 0;

    & input {
      font-size: 18px;
      font-weight: 700;
    }

    & svg {
      background: ${theme.palette.blueDeFrance[90]};
      border-radius: 12px;
      width: 48px;
      padding: 8px;
    }
  }
`;

export const TextArea = styled(textArea)`
  width: 100%;

  & .input-container {
    height: 90px;
    border-radius: 12px;

    & textarea {
      font-size: 18px;
      font-weight: 700;
    }
  }
`;
