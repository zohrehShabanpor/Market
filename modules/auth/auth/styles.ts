import { Avatar, Button as Btn, Version as Vrsn } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledAuth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  background-color: ${theme.palette.platinum[100]};
  height: 100%;
  padding: 0 15px;
  row-gap: 20px;
`;

export const Logo = styled(Avatar)`
  background-color: ${theme.palette.platinum[100]};
  width: 100px;
  height: fit-content;
  border-radius: 0 !important;

  & * {
    border-radius: 0 !important;
  }
`;

export const Button = styled(Btn)`
  font-size: 18px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 40px);
  column-gap: 5px;
  position: absolute;
  bottom: 60px;

  & :first-of-type {
    font-weight: 600;
    background-color: ${theme.palette.blueDeFrance[100]}!important;
  }
  & :last-of-type {
    font-weight: 700;
    background-color: ${theme.palette.sunRay[100]}!important;
    color: ${theme.palette.blueDeFrance[100]}!important;
  }
`;

export const Motto = styled.span`
  color: ${theme.palette.blueDeFrance[100]};
  font-weight: 900;
  font-size: 35px;
  & span {
    text-shadow: -2px 2px 1px ${theme.palette.blueDeFrance[100]};
    color: ${theme.palette.sunRay[100]};
    & span {
      text-shadow: none;
      margin-right: 3px;
      margin-left: 6px;
    }
  }
`;

export const Version = styled(Vrsn)`
  position: absolute;
  bottom: 25px;
`;
