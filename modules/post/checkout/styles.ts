import { Button as button, IconButton as iconButton } from "#";
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
  height: 330px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
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
  font-size: 14px;
  border-radius: 12px;
  width: 30%;
  height: 50px;
  color: ${theme.palette.sunRay[100]};
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:first-of-type {
    justify-content: end;
    column-gap: 6px;

    & span {
      color: ${theme.palette.platinum[80]};
      font-weight: 800;
      font-size: 14px;
      flex-grow: 1;
    }

    & .warn {
      color: ${theme.palette.coralRed[100]};
      font-size: 10px;
      border: 2px solid ${theme.palette.platinum[80]};
      border-radius: 8px;
      padding: 1px 6px;
      flex-grow: 0;
    }

    & div {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${theme.palette.platinum[95]};
      color: ${theme.palette.coralRed[100]};
      text-align: center;
      padding: 2px 0 5px;
      font-weight: 800;
      font-size: 14px;
      cursor: pointer;
      user-select: none;
    }
  }
  &:nth-of-type(2) {
    column-gap: 8px;

    & span {
      flex-grow: 1;
      height: 100%;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 4px;
      border: 3px solid ${theme.palette.platinum[80]};
      color: ${theme.palette.darkGunmetal[100]};
      font-weight: 800;
      font-size: 22px;

      & span {
        border: none;
        flex-grow: 0;

        &:nth-of-type(2) {
          font-weight: 700;
          font-size: 13px;
        }
      }
    }
  }
  &:nth-of-type(3) {
    margin-top: 10px;

    column-gap: 8px;

    & span {
      flex-grow: 1;
      height: 100%;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 4px;
      border: 3px solid ${theme.palette.platinum[80]};
      color: ${theme.palette.darkGunmetal[100]};
      font-weight: 800;
      font-size: 22px;
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
