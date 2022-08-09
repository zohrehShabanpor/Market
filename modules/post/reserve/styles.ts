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
  color: ${theme.palette.blueDeFrance[90]};

  &:first-of-type {
    color: ${theme.palette.sunRay[100]};
  }
`;

export const Container2 = styled.div`
  display: flex;
  width: 100%;

  & span {
    display: flex;
    align-items: center;
    font-weight: 800;
    color: ${theme.palette.platinum[80]};
    column-gap: 4px;

    & svg {
      width: 18px;
      height: 18px;
      & path {
        &:nth-of-type(2) {
          stroke: ${theme.palette.blueDeFrance[90]}!important;
          fill: ${theme.palette.blueDeFrance[90]}!important;
        }
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
