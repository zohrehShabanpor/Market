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
  ${({ readOnly }): string =>
    readOnly
      ? `background-color:${theme.palette.platinum[95]};
      & input{
        background-color:${theme.palette.platinum[95]};
      }`
      : `background-color:${theme.palette.platinum[100]};
      & input{
        background-color:${theme.palette.platinum[100]};
      }`};

  height: 30px;
  width: 100%;
  display: flex;
  border: solid 2px
    ${({ required }): string =>
      required ? `${theme.palette.blueDeFrance[100]}` : `#bdbdbd`};
  padding: 3px 3px;
  border-radius: 15px 0 15px 15px;

  & svg {
    height: 100%;
    width: 20px;
    border-radius: 15px 0 0 15px;
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  flex-grow: 1;
  font-size: 10px;
  color: ${theme.palette.darkGunmetal[100]};
  border: none;
  outline: none;
  border-radius: 15px;
  padding: 0 5px;
  text-align: start;
  &::placeholder {
    color: ${theme.palette.platinum[80]};
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
