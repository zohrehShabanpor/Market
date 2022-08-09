import { Button as button } from "#";
import styled from "@emotion/styled";

export const Main = styled.div`
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Container = styled.div`
  display: flex;
  column-gap: 4px;
  padding-top: 15px;
`;
export const Button = styled(button)`
  width: 100%;
  border-radius: 20px 3px 20px 20px;
  font-size: 16px;
  font-weight: 900;
  height: 40px;

  & .icon-container {
    position: absolute;
    width: 22px;
    height: 22px;
  }
`;
