import styled from "@emotion/styled";
import { theme } from "@theme";

export const Container9 = styled.div`
  display: flex;
  sling-items: center;
  justify-content: space-between;
`;

export const Container10 = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3px;
  font-weight: 800;
  font-size: 17px;
  color: ${theme.palette.platinum[80]};

  & span {
    font-size: 16px;
    color: ${theme.palette.paleGreen[100]};
  }

  & svg {
    width: 18px;
    height: 18px;
  }
`;

export const Container11 = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  font-weight: 800;
  font-size: 17px;
  color: ${theme.palette.platinum[80]};

  & span {
    font-size: 16px;
    color: ${theme.palette.paleGreen[100]};
  }

  & svg {
    width: 18px;
    height: 18px;

    & path {
      stroke: ${theme.palette.paleGreen[100]}!important;
    }
  }
`;

export const Container12 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-bottom: 3px solid ${theme.palette.platinum[95]};
  padding: 10px 0;
`;

export const Container13 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 8px 0;
`;

export const Container14 = styled.div`
  display: flex;
  background: ${theme.palette.platinum[95]};
  align-items: center;
  justify-content: space-between;
  width: calc(50% - 5px);
  height: 40px;
  border-radius: 8px;
  padding: 0 10px;

  & span {
    color: ${theme.palette.paleGreen[100]};
    font-weight: 800;
    font-size: 17px;
  }

  & div {
    color: ${theme.palette.platinum[80]};
    font-weight: 800;
    font-size: 15px;
  }
`;

export const Container15 = styled.div`
  display: flex;
  background: ${theme.palette.platinum[95]};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  padding: 0 10px;

  & span {
    color: ${theme.palette.paleGreen[100]};
    font-weight: 800;
    font-size: 17px;
  }

  & div {
    color: ${theme.palette.platinum[80]};
    font-weight: 800;
    font-size: 15px;
  }
`;
