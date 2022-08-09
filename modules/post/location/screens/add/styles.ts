import { Button as button } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const Container1 = styled.div`
  background-color: ${theme.palette.platinum[100]};
  border: solid 1px #bdbdbd;
  border-radius: 24px 24px 0 0;
  padding: 14px 14px 30px;
  height: 400px;
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
      margin-left: 4px;

      & path {
        stroke: ${theme.palette.blueDeFrance[90]};
      }
    }
  }

  .title2 {
    color: ${theme.palette.darkGunmetal[100]};
    font-weight: 800;
    font-size: 18px;
    margin-top: 20px;
  }

  .input-container {
    border-radius: 12px;
    height: 45px;
    & input {
      color: ${theme.palette.platinum[80]};
      font-weight: 700;
      font-size: 16px;
    }
  }
`;

export const Button = styled(button)`
  color: ${theme.palette.sunRay[100]};
  font-weight: 700;
  font-size: 18px;
  margin-top: 20px;
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
