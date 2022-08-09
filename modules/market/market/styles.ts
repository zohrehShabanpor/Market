import { Story as story } from "#";
import styled from "@emotion/styled";

import { theme } from "@theme";

export const Content = styled.div`
  padding: 20px 15px 0;
  height: calc(100% - 100px);
  overflow-y: scroll;
  flex-direction: column;
  row-gap: 10px;
`;

export const StoryContainer = styled.div`
  display: flex;
  column-gap: 10px;
  overflow-x: scroll;
`;

export const ShopContainer = styled.div`
  display: flex;
  column-gap: 10px;
  overflow-x: scroll;
`;

export const Story = styled(story)`
  flex-grow: 1;
  width: 100%;
  height: 100%;

  .story-border {
    background-image: none;
  }
`;

export const StyledMarket = styled.div`
  background-color: ${theme.palette.platinum[98]};
  height: 100%;
`;
