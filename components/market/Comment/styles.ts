import styled from "@emotion/styled";
import { theme } from "@theme";

export const Tag = styled.div`
  background-color: ${theme.palette.platinum[95]};
  color: ${theme.palette.darkGunmetal[100]};
  width: fit-content;
  padding: 2px 6px;
  border-radius: 7px;
  font-weight: 600;
  font-size: 14px;
`;

export const Container9 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container10 = styled.div`
  display: flex;
  align-items: center;
  column-gap: 55px;

  font-weight: 600;
  font-size: 14px;
  color: ${theme.palette.platinum[80]};
`;

export const Container11 = styled.div`
  display: flex;
  column-gap: 6px;
  padding-top: 5px;
`;

export const Container13 = styled.div`
  font-weight: 600;
  color: ${theme.palette.darkGunmetal[100]};
  text-align: justify;
`;

export const Container12 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  row-gap: 3px;
  padding: 6px 0 18px;
  border-bottom: 3px solid ${theme.palette.platinum[95]};
`;

export const ProductTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: ${theme.palette.darkGunmetal[100]};
`;

export const Container14 = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 5px 0;
`;

export const TextArea = styled.textarea`
  color: ${theme.palette.paleGreen[100]};
  font-weight: 600;
  font-size: 14px;
  width: 100%;
  height: 80px;
  border-radius: 6px;
  background-color: ${theme.palette.platinum[98]};
  border: 2px solid ${theme.palette.paleGreen[100]};
  outline: none;
  padding: 6px 4px;

  ::placeholder {
    color: ${theme.palette.paleGreen[100]};
  }

  & :focus {
    border: 2px solid ${theme.palette.paleGreen[100]};
    outline: none;
  }
`;
