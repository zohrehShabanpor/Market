import { Button as button, Input } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const Container1 = styled.div`
  background-color: ${theme.palette.platinum[100]};
  border: solid 1px #bdbdbd;
  border-radius: 24px 24px 0 0;
  padding: 14px 14px 30px;
  height: 600px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  .title1 {
    color: ${theme.palette.platinum[80]};
    font-weight: 700;
    font-size: 18px;
    height: 22px;

    & svg {
      height: 20px;
      width: 20px;
      background-color: ${theme.palette.blueDeFrance[90]};
      padding: 3px;
      border-radius: 50%;
      margin-left: 4px;
    }
  }
`;

export const Button = styled(button)`
  color: ${theme.palette.sunRay[100]};
  font-weight: 700;
  font-size: 18px;
  margin-top: 200px;

  & svg {
    & path {
      stroke: ${theme.palette.sunRay[100]}!important;
    }
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 6px 0 12px;
  border-bottom: 2px solid ${theme.palette.platinum[80]};

  .title2 {
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-weight: 800;
    font-size: 22px;
    color: ${theme.palette.darkGunmetal[100]};
    width: 100%;

    & span {
      margin-top: 2px;
    }

    & svg {
      width: 16px;
      height: 16px;
      & path {
        fill: ${theme.palette.blueDeFrance[90]}!important;
      }
    }
  }

  ${Input} {
    width: fit-content;
    flex-grow: 1;
    .input-container {
      height: 38px;
      border-radius: 19px 3px 19px 19px;
      display: inline;
      & input {
        font-size: 18px;
        font-weight: 800;
      }
    }
  }

  .change-button {
    color: ${theme.palette.blueDeFrance[90]};
    & svg {
      & path {
        stroke: ${theme.palette.blueDeFrance[90]}!important;
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
