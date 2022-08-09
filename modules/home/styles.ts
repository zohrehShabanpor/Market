import { Story as story } from "#";
import styled from "@emotion/styled";
import { theme } from "@theme";

export const StoryContainer = styled.div`
  display: flex;
  margin: 20px 0 10px;
  column-gap: 10px;
  overflow-x: scroll;
`;

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-top: 10px;
`;

export const Banner2 = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100px;
  background-color: ${theme.palette.sunRay[100]};
  border-radius: 14px;
`;

export const Banner3 = styled.div`
  width: 100%;
  height: 90px;
  border-radius: 14px;
  background-color: ${theme.palette.blueDeFrance[100]};
`;

export const Banner4 = styled.div`
  width: 100%;
  height: 90px;
  border-radius: 14px;
  background-color: ${theme.palette.platinum[90]};
`;

export const Story = styled(story)`
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;

export const StyledHome = styled.div`
  background-color: ${theme.palette.platinum[100]};
  height: calc(100% - 100px);
  padding: 0 15px;
  overflow-y: scroll;
`;
