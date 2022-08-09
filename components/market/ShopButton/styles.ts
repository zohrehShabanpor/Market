import styled from "@emotion/styled";
import { theme } from "@theme";
import { Button as button } from "#";
export const StyledButton = styled.div`
  background-color: ${theme.palette.paleGreen[100]};
  color: ${theme.palette.darkGunmetal[100]};

  height: 30px;

  border-radius: 10px;
  font-size: 20px;
  font-weight: 800;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  user-select: none;

  & svg {
    cursor: pointer;
    width: 13px;
    height: 13px;
  }
`;

export const Button = styled(button)`
  width: 100%;
  border-radius: 20px 3px 20px 20px;
  height: 40px;
  font-size: 16px;
  padding: 0 14px;

  & svg {
    cursor: pointer;
    width: 13px;
    height: 13px;
  }
`;
