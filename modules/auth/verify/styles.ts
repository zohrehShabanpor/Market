import { Input as input, Button as button, Version as version } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledVerify = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.palette.platinum[100]};
  height: 100%;
  padding: 0 25px;
  row-gap: 30px;

  & * {
    .first-input {
      .input-container {
        border-radius: 12px 12px 0 0;
      }
    }
  }
`;

export const Input = styled(input)`
  & .input-container {
    height: 50px;
    border-radius: 12px;
    & input {
      font-size: 18px;
      font-weight: 700;
      text-align: center;
      letter-spacing: 10px;
    }
  }
  &:first-of-type {
    & .input-container {
      border-radius: 12px 12px 0 0;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${theme.palette.blueDeFrance[100]};
  color: ${theme.palette.sunRay[100]};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 0 0 12px 12px;
  border: solid 1px #bdbdbd;
  position: relative;
`;

export const Button = styled(button)`
  height: calc(100% - 8px);
  width: 70px;
  position: absolute;
  border-radius: 10px 4px 10px 10px;
  background-color: ${theme.palette.sunRay[100]};
  color: ${theme.palette.darkGunmetal[100]};
  font-weight: 800;
  right: 4px;
`;

export const Button2 = styled(button)`
  color: ${theme.palette.platinum[100]};
  width: calc(100% - 30px);
  position: absolute;
  font-weight: 700;
  font-size: 18px;
  bottom: 60px;
`;

export const Version = styled(version)`
  position: absolute;
  bottom: 25px;
`;
