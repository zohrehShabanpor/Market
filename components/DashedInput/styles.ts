import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  row-gap: 8px;
`;

export const Container = styled.div<{ required: boolean; readOnly: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  border: solid 2px
    ${({ required }): string =>
      required ? `${theme.palette.blueDeFrance[100]}` : `#bdbdbd`};
  padding: 0 8px 10px;
  border-radius: 12px;
  align-items: end;
  column-gap: 8px;
  justify-content: center;

  & svg {
    height: 100%;
    width: 20px;
    border-radius: 15px 0 0 15px;
  }
`;

export const Input = styled.input`
  width: 30px;
  height: 26px;
  font-size: 24px;
  font-weight: 700;
  color: ${theme.palette.darkGunmetal[100]};
  border: none;
  outline: none;
  text-align: center;
  border-width: 0;
  border-style: solid;
  border-color: ${theme.palette.platinum[90]};
  display: flex;
  align-items: end;
  justify-content: center;

  &:focus {
    border-color: ${theme.palette.blueDeFrance[100]};
  }
`;

export const Label = styled.label`
  color: ${theme.palette.platinum[80]};
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  .star {
    color: red;
  }
`;
