import { Button as button } from "#";
import Story from "#/Story";
import styled from "@emotion/styled";
import { theme } from "@theme";
import { Bookmark as bookmark, BookmarkFill as bookmarkFill } from "@images";

export const StyledShop = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: end;

  border-radius: 16px;
  background-color: ${theme.palette.paleGreen[100]};
`;

export const Container = styled.div`
  width: 100%;
  height: 45%;
  border: 2px solid ${theme.palette.platinum[80]};
  padding: 8px;

  border-radius: 0 0 16px 16px;
  background-color: ${theme.palette.platinum[100]};

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 19px;
  color: ${theme.palette.darkGunmetal[100]};
  font-weight: 800;
`;

export const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 3px;
`;

export const Delivery = styled.div`
  font-size: 13px;
  font-weight: 800;
  color: ${theme.palette.platinum[80]};
  & span {
    color: ${theme.palette.paleGreen[100]};
    margin-right: 3px;
    & span {
      color: ${theme.palette.platinum[80]};
    }
  }
`;

export const NotRated = styled.div`
  color: ${theme.palette.coralRed[100]};
  font-size: 14px;

  font-weight: 800;
`;

export const Category = styled.div`
  font-size: 13px;

  font-weight: 600;
  color: ${theme.palette.platinum[80]};
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
  font-size: 12px;
  font-weight: 700;
  color: ${theme.palette.platinum[80]};
  & span {
    display: block;
    width: 6px;
    height: 6px;
    background-color: ${theme.palette.paleGreen[100]};
    border-radius: 50%;
  }
`;

export const Status = styled.div`
  font-size: 13px;
  font-weight: 800;
  color: ${theme.palette.platinum[80]};
`;

export const Container4 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 10px;

  & svg {
    width: 18px;
  }
`;

export const RateCount = styled.div`
  color: ${theme.palette.platinum[80]};
  font-weight: 600;
  font-size: 14px;
  flex-grow: 1;
  text-align: end;
`;

export const Shop = styled(Story)`
  background-color: ${theme.palette.platinum[100]};
  align-self: center;
  height: 70px;
  width: 70px;
  & div {
    background-color: ${theme.palette.platinum[95]};
    border: solid 3px ${theme.palette.platinum[80]};
  }
`;

export const Container5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  padding: 0 10px;

  .active {
    background-color: ${theme.palette.paleGreen[100]};
    color: ${theme.palette.platinum[100]};
  }
`;

export const Button = styled(button)`
  border-radius: 16px 16px 0 0;
  background-color: ${theme.palette.platinum[95]};
  color: ${theme.palette.platinum[80]};
  font-size: 18px;
`;
