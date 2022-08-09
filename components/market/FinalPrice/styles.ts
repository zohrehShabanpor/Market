import styled from "@emotion/styled";
import { theme } from "@theme";

export const Container2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;

  & svg {
    width: 44px;
    height: 44px;
  }
`;

export const Container3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  row-gap: 3px;

  & .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
    margin-bottom: -3px;
  }

  & .description {
    line-height: 14px;
    color: ${theme.palette.blueDeFrance[100]};
    font-weight: 600;
    font-size: 13px;
    white-space: nowrap;
  }
`;
