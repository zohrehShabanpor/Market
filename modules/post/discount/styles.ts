import { Button as button, Input as input } from "#";
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
  padding: 26px 14px 30px;
  height: 250px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  .title {
    font-weight: 800;
    font-size: 18px;
    color: ${theme.palette.platinum[80]};
  }
`;

export const Button = styled(button)`
  font-weight: 800;
  font-size: 18px;
  color: ${theme.palette.platinum[100]};
  height: 45px;
  margin-top: 6px;
`;

export const Button2 = styled(button)`
  font-weight: 800;
  font-size: 18px;
  border-radius: 12px;
  width: 30%;
  height: 50px;
  color: ${theme.palette.sunRay[100]};
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;

  & span {
    & span {
      border: none;
      flex-grow: 0;

      &:nth-of-type(2) {
        font-weight: 700;
        font-size: 13px;
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
  height: 100%;

  .input-container {
    flex-grow: 1;
    height: 100%;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 4px;
    border: 3px solid ${theme.palette.platinum[80]};
    input {
      color: ${theme.palette.platinum[80]};
      font-weight: 700;
      font-size: 16px;
    }
  }
`;
