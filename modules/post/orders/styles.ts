import { Notification as notification } from "#";
import styled from "@emotion/styled";
import { Arrow as arrow } from "@images";
import { theme } from "@theme";

export const Content = styled.div`
  padding: 5px 15px 10px;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 0 12px;
  column-gap: 10px;
  height: 30px;
`;

export const Option = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 2px 12px;
  border-bottom: 3px solid ${theme.palette.platinum[80]};
  color: ${theme.palette.platinum[80]};
  font-weight: 700;
  font-size: 13px;
  position: relative;
  cursor: pointer;

  .notification-container {
    color: ${theme.palette.darkGunmetal[100]};
  }

  &.active {
    border-bottom: 3px solid ${theme.palette.blueDeFrance[90]};
    color: ${theme.palette.blueDeFrance[90]};

    .notification-container {
      background-color: ${theme.palette.coralRed[100]};
      color: ${theme.palette.platinum[100]};
    }
  }
`;

export const ActiveContainer = styled.div`
  flex-grow: 1;
  height: 80%;
  width: 100%;
  padding-top: 15px;
`;

export const Notification = styled(notification)`
  position: absolute;
  left: 2px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${theme.palette.platinum[95]};
  color: ${theme.palette.platinum[80]};
  font-size: 20px;
  font-weight: 800;
  height: 80px;
`;

export const Arrow = styled(arrow)`
  position: absolute;
  height: 24px;
  right: 35px;
  top: 23px;
  transform: rotate(180deg);
  z-index: 100;
  & path {
    stroke: ${theme.palette.blueDeFrance[90]}!important;
  }
`;

export const StyledMarket = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: ${theme.palette.platinum[100]};
  height: 100%;
  position: relative;
`;
