import { StyledProps } from "_";
import { Banner } from "#";
import {
  Story,
  StyledHome,
  StoryContainer,
  BannerContainer,
  Banner2,
  Banner3,
  Banner4,
} from "./styles";
import useDraggableScroll from "use-draggable-scroll";
import { useRef } from "react";

type Props = StyledProps<{}>;

function HomeModule({ className }: Props): React.ReactElement {
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref);

  return (
    <div className={className}>
      <StoryContainer ref={ref} onMouseDown={onMouseDown}>
        <Story title="سوپر مارکت یاران" />
        <Story title="رستوران امیرکبیر" />
        <Story title="بابل نان" />
        <Story title="گل و بلبل" />
        <Story title="موبایل فلاح" />
        <Story title="موبایل فلاح" />
        <Story title="موبایل فلاح" />
      </StoryContainer>
      <Banner />
      <Banner2 />
      <BannerContainer>
        <Banner3 />
        <Banner3 />
      </BannerContainer>
      <BannerContainer>
        <Banner4 />

        <Banner4 />
      </BannerContainer>
    </div>
  );
}

export default StyledHome.withComponent(HomeModule);
