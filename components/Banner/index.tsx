import { observer } from "mobx-react";
import { StyledProps } from "_";
import { Banner1 } from "./styles";
import { useStore } from "@store";
import { mainColors } from "#/Layout";
import { Pagination } from "#";
import { TouchEvent, useState } from "react";

type Props = StyledProps<{
  hasPagination?: boolean;
}>;

export enum SwipeDirections {
  Right,
  Left,
}

function BannerComponent({
  hasPagination = true,
  className,
}: Props): React.ReactElement {
  const globalStore = useStore();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [swipeDirection, setSwipeDirection] = useState<SwipeDirections>();
  const minSwipeDistance = 50;

  let themeColor = globalStore.currentModule?.themeColor;

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setSwipeDirection(undefined);
    setTouchStart(event.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      setSwipeDirection(
        isLeftSwipe ? SwipeDirections.Left : SwipeDirections.Right
      );
    }
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(event.targetTouches[0].clientX);
  };

  return (
    <Banner1
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      themeColor={themeColor || mainColors.blue}
      className={className}
    >
      <span className="first">بدون اعتماد;</span>
      <span className="seconde">زندگی سخته...</span>
      {hasPagination ? (
        <Pagination
          swipe={swipeDirection}
          background={themeColor === mainColors.green ? `#93E4C9` : undefined}
        />
      ) : null}
    </Banner1>
  );
}

export default observer(BannerComponent);
