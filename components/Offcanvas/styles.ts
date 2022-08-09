import styled from "@emotion/styled";
import { theme } from "@theme";
import { Menu as menu } from "@images";

export const Offcanvas = styled.div<{ size: 1 | 2 | 3 | 4 }>`
  width: calc(100% - 30px);

  height: ${({ size }): string =>
    size === 1 ? `40vh` : size === 2 ? `55vh` : size === 3 ? `60vh` : `80vh`};
  align-self: center;
  right: 15px;
  border: solid 1px #bdbdbd;
  border-radius: 12px 12px 0 0;
`;

export const Body = styled.div`
  padding: 14px 14px 30px;

  width: 100%;
  overflow-y: scroll;
`;

export const Header = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
  padding: 14px 14px 0;
  justify-content: space-between;

  & button {
    opacity: 1;
    outline: none;
  }

  & .title {
    display: flex;
    column-gap: 3px;
    align-items: center;
    color: ${theme.palette.platinum[80]};
    font-weight: 800;
    font-size: 18px;
    & svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  & svg {
    width: 100%;
    height: 100%;
  }
`;
