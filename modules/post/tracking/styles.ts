import { Avatar, Button as button, IconButton as iconButton } from "#";
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
  height: 500px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Button = styled(button)`
  font-weight: 700;
  font-size: 16px;
  width: calc(50% - 2px);
  height: 40px;
  border-radius: 20px 3px 20px 20px;
  padding: 0;
  position: relative;

  &:nth-of-type(2) {
    color: ${theme.palette.blueDeFrance[90]};
    & svg {
      & path {
        stroke: ${theme.palette.blueDeFrance[90]}!important;
      }
    }

    .icon-container {
      left: 12px;
    }
  }
  &:nth-of-type(3) {
    color: ${theme.palette.platinum[100]};
  }

  .icon-container {
    width: 20px;
    height: 20px;
    border-radius: 0;
    position: absolute;
    padding: 0;

    & svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Container2 = styled.div`
  display: flex;
  column-gap: 4px;
  row-gap: 8px;
  flex-wrap: wrap;
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

export const Container4 = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-bottom: 20px;

  .avatar-container {
    width: 60px;
    height: 60px;
  }
`;

export const Container5 = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  flex-grow: 1;

  .title {
    color: ${theme.palette.darkGunmetal[100]};
    font-weight: 800;
    font-size: 20px;
  }
  .description {
    color: ${theme.palette.blueDeFrance[90]};
    font-weight: 600;
    font-size: 14px;
  }
`;

export const Container6 = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid ${theme.palette.platinum[80]};
  padding: 2px 16px;
  border-radius: 16px;

  font-size: 18px;
  font-weight: 800;
  letter-spacing: 3px;

  & span {
    white-space: nowrap;
    height: 23px;
  }

  & svg {
    width: 26px;
    margin-right: 7px;
  }
`;

export const Container7 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 20px;
  margin-top: 15px;

  .button-container {
    color: ${theme.palette.coralRed[90]}!important;
    width: 100%;
  }
`;
