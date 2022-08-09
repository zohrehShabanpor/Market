import { Button as button, TextArea as textArea } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledPost = styled.div`
  background-color: ${theme.palette.platinum[95]};
  height: 100%;
  position: relative;
`;

export const Container1 = styled.div`
  background-color: ${theme.palette.platinum[100]};
  border: solid 1px #bdbdbd;
  border-radius: 24px 24px 0 0;
  padding: 14px 14px 30px;
  height: 430px;
  display: flex;
  flex-direction: column;

  .title {
    font-weight: 800;
    color: ${theme.palette.platinum[80]};
    margin-bottom: 20px;

    & svg {
      width: 20px;
      height: 20px;
      margin-left: 6px;
    }
  }
`;

export const Button = styled(button)`
  font-weight: 700;
  font-size: 18px;
  width: 100%;
  height: 40px;
  border-radius: 20px 3px 20px 20px;
`;

export const Container3 = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - 30px);
  right: 15px;

  display: flex;
  flex-direction: column;
  row-gap: 16px;
  justify-content: end;
`;

export const TextArea = styled(textArea)`
  margin: 10px 0 20px;
  .input-container {
    border-radius: 12px;
    height: 80px;

    textarea {
      color: ${theme.palette.platinum[80]};
      font-weight: 700;
      font-size: 13px;
    }
  }
`;
