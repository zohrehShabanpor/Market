import styled from "@emotion/styled";
import { theme } from "@theme";

export const StyledCalender = styled.div``;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-weight: 800;
  font-size: 18px;
  width: 100%;
  justify-content: center;

  &.perv {
    margin: 2px 0;

    & div {
      padding: 0 6px;
      color: ${theme.palette.platinum[80]};
      border: none;
    }
  }

  &.next {
    margin: 2px 0;

    & div {
      padding: 0 6px;
      color: ${theme.palette.platinum[90]};
      border: none;
    }
  }
`;

export const ItemContainer2 = styled.div<{ justMinute?: boolean }>`
  position: relative;

  border-top: 2px solid ${theme.palette.platinum[80]};
  border-bottom: 2px solid ${theme.palette.platinum[80]};
  padding: 4px 0;
  text-align: center;
  width: 35px;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;

  .two-dots {
    position: absolute;
    right: -6px;
  }

  &.month {
    width: 110px;
  }

  ${({ justMinute }): string =>
    justMinute
      ? `
        display:flex;
        align-items:center;
        justify-content:center;
        width: calc(100%  - 40px);
        .minute{
          width:40px;
        }
      `
      : ``}
`;
