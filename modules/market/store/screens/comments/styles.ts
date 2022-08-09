import { Button as button } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const Container1 = styled.div`
  display: flex;
  align-items: stretch;
  border-bottom: 3px solid ${theme.palette.platinum[95]};
  padding: 16px 0 18px;
`;

export const Container2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const Container3 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & div {
    color: ${theme.palette.paleGreen[100]};
    font-weight: 800;
    font-size: 45px;
    line-height: 40px;
  }

  & span {
    color: ${theme.palette.platinum[80]};
    font-weight: 600;
    font-size: 16px;
    line-height: 40px;
  }
`;

export const Container4 = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3px;

  & .percent {
    display: flex;
    align-items: center;
    justify-content: end;
    column-gap: 4px;
    color: ${theme.palette.platinum[80]};
    width: 58px;

    & span {
      font-weight: 800;
      font-size: 15px;
      line-height: 13px;
      margin-top: 2px;
    }
    & div {
      line-height: 15px;
      margin-top: 4px;
    }
  }
`;

export const Container5 = styled.div<{ percent: number }>`
  background-color: ${theme.palette.platinum[95]};
  border-radius: 4px;
  height: 16px;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: end;
  margin-left: 2px;

  & div {
    background: ${theme.palette.paleGreen[100]};
    border-radius: 4px;
    width: ${({ percent }): string => `${percent}%`};
  }
`;

export const Container6 = styled.div`
  display: flex;
  align-items: stretch;
  border-bottom: 3px solid ${theme.palette.platinum[95]};
  padding: 6px 0;
  column-gap: 10px;
`;

export const Container7 = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  padding: 6px 0;
  color: ${theme.palette.platinum[80]};
  font-weight: 600;
  font-size: 14px;
`;

export const Container8 = styled.div`
  background-color: ${theme.palette.platinum[100]};
  flex-grow: 1;
  border-radius: 12px;
`;

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

export const Container16 = styled.div`
  padding: 12px 0;

  .header {
    padding: 0 0 6px;

    & svg {
      :nth-of-type(2) {
        transform: rotate(270deg);
      }
    }
  }
`;

export const Button = styled(button)`
  margin-top: 20px;
  color: ${theme.palette.platinum[100]};
  font-size: 18px;
`;
