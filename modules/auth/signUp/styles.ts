import { Avatar, Button as Btn, Version as Vrsn } from "#";
import { Input as input } from "#";
import { DashedInput as dashedInput } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  row-gap: 10px;
  background-color: ${theme.palette.platinum[100]};
  height: 100%;
  padding: 30px 25px 0;
  row-gap: 20px;
  max-height: calc(100% - 120px);
  overflow-y: scroll;
`;

export const Logo = styled(Avatar)`
  background-color: ${theme.palette.platinum[100]};
  width: 100px;
  height: 100px;
`;

export const Button = styled(Btn)`
  color: ${theme.palette.platinum[100]};
  width: calc(100% - 30px);
  position: absolute;
  font-weight: 700;
  font-size: 18px;
  bottom: 60px;
`;

export const Version = styled(Vrsn)`
  position: absolute;
  bottom: 25px;
`;

export const Input = styled(input)`
  & .input-container {
    height: 45px;
    border-radius: 12px;
    & input {
      font-size: 20px;
      font-weight: 800;
    }
  }
`;

export const DashedInput = styled(dashedInput)`
  & .input-container {
    height: 45px;
    border-radius: 12px;
    & input {
      font-size: 20px;
      font-weight: 800;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 8px;
  width: 100%;
`;
