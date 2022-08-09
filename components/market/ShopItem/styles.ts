import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledShop = styled.div`
  height: 95px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: end;

  border-radius: 16px;
  background-color: ${theme.palette.paleGreen[100]};
`;

export const Container = styled.div`
  height: 50%;
  width: 130px;
  border: 2px solid ${theme.palette.paleGreen[100]};
  padding: 4px 6px;

  border-radius: 0 0 16px 16px;
  background-color: ${theme.palette.platinum[100]};

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 16px;

  color: ${theme.palette.darkGunmetal[100]};
  font-weight: 800;
`;

export const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 5px;
`;

export const Delivery = styled.div`
  font-size: 9px;

  font-weight: 800;
  color: ${theme.palette.platinum[80]};
  & span {
    color: ${theme.palette.paleGreen[100]};
    margin-right: 3px;
  }
`;

export const NotRated = styled.div`
  color: ${theme.palette.sunRay[100]};
  font-size: 10px;

  font-weight: 800;
`;

export const Category = styled.div`
  font-size: 9px;

  font-weight: 600;
  color: ${theme.palette.platinum[80]};
`;
