import {
  Container,
  Logo,
  Story,
  StoryLineContainer,
  StoryLine,
  StoryLineFill,
  Container1,
  Like,
} from "./styles";
import { useEffect, useMemo, useRef, useState } from "react";
import { StyledProps, useLongPress } from "_";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { mainColors } from "#/Layout";
import { theme } from "@theme";

type Props = StyledProps<{
  stories?: Array<string>;
  getIsStoryOpen?: (data: boolean) => void;
}>;

function StoryComponent({
  stories = ["", "", ""],
  getIsStoryOpen,
}: Props): React.ReactElement {
  const globalStore = useStore();
  const [currentStory, setCurrentStory] = useState(1);
  const [timer, setTimer] = useState(0);
  const [paused, setPaused] = useState(false);
  const [closing, setClosing] = useState<boolean>();
  const pausedRef = useRef<boolean | null>(null);
  pausedRef.current = paused;

  const onLongPress = (data: boolean) => {
    if (data) setPaused(true);
    else setPaused(false);
  };

  const backspaceLongPress = useLongPress(onLongPress);

  const timerFunc = () => {
    const interval = setInterval(() => {
      if (!pausedRef.current) setTimer((timer) => timer + 1);
    }, 1000);
    return () => clearInterval(interval);
  };

  const handleChangeStory = (event: any) => {
    let unit = window.screen.width / 3;
    let pervArea = window.screen.width - unit;
    let isPerv = event.clientX > pervArea;

    if (isPerv) {
      if (currentStory !== 1) {
        setCurrentStory((currentStory) => currentStory - 1);
        setTimer(0);
      }
    } else {
      if (currentStory === stories.length) {
        if (getIsStoryOpen) setClosing(true);
      } else {
        setCurrentStory((currentStory) => currentStory + 1);
        setTimer(0);
      }
    }
  };

  useEffect(() => {
    timerFunc();
  }, []);

  useMemo(() => {
    if (timer >= 15) {
      setTimer(0);
      if (currentStory === stories.length) {
        if (getIsStoryOpen) setClosing(true);
      } else setCurrentStory((currentStory) => currentStory + 1);
    }
  }, [timer, currentStory, stories.length]);

  useMemo(() => {
    if (closing === undefined) return;

    setTimeout(() => {
      if (getIsStoryOpen) getIsStoryOpen(!closing);
    }, 100);
  }, [closing]);

  return (
    <Story
      style={{ animationName: closing ? `close` : `open` }}
      {...backspaceLongPress}
      themeColor={globalStore?.themeColor || mainColors.blue}
      onClick={(event) => {
        handleChangeStory(event);
      }}
    >
      <StoryLineContainer>
        {stories.map((item, index) => {
          return (
            <StoryLine
              style={{
                backgroundColor:
                  index + 1 < currentStory
                    ? theme.palette.platinum[100]
                    : theme.palette.platinum[90],
              }}
              key={index}
            >
              <StoryLineFill
                style={{
                  animationPlayState: paused ? `paused` : `running`,
                }}
                className={currentStory === index + 1 ? "active" : ""}
              />
            </StoryLine>
          );
        })}
      </StoryLineContainer>
      <Container1>
        <Logo className="story">
          <Container></Container>
        </Logo>
        <span>2 ساعت پیش</span>
        <Like />
      </Container1>
    </Story>
  );
}

export default observer(StoryComponent);
