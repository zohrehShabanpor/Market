import { StyledProps } from "_";
import { Pagination } from "./styles";
import { useMemo, useState } from "react";
import { theme } from "@theme";
import { SwipeDirections } from "#/Banner";

type Props = StyledProps<{
  background?: string;
  swipe?: 0 | 1;
  count?: number;
}>;

function PaginationComponent({
  background,
  swipe,
  count = 5,
}: Props): React.ReactElement {
  const [activeItem, setActiveItem] = useState(2);

  const calcPerv = (item: number): number => {
    if (item === 0) return count - 1;
    return item - 1;
  };

  const calcNext = (item: number): number => {
    if (item === count - 1) return 0;
    return item + 1;
  };

  useMemo(() => {
    if (swipe === undefined) return;

    setActiveItem((activeItem) =>
      swipe === SwipeDirections.Left
        ? calcPerv(activeItem)
        : swipe === SwipeDirections.Right
        ? calcNext(activeItem)
        : activeItem
    );
  }, [swipe]);

  return (
    <Pagination background={background || `${theme.palette.blueDeFrance[80]}`}>
      {[...Array(count)].map((_, index) => (
        <span
          key={index}
          className={activeItem === index ? "active" : ""}
          onClick={() => {
            setActiveItem(index);
          }}
        ></span>
      ))}
    </Pagination>
  );
}

export default PaginationComponent;
