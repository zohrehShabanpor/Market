import { MODULES, StyledProps } from "_";
import { ShopItem, Banner, CategoryHeader } from "#";
import {
  Story,
  StyledMarket,
  StoryContainer,
  ShopContainer,
  Content,
} from "./styles";
import { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";

type Props = StyledProps<{}>;

function MarketModule({ className }: Props): React.ReactElement {
  const ref = useRef(null);
  const ref2 = useRef(null);

  const ITEMS: Array<{
    title: string;
    deliveryPrice: number | "رایگان";
    category: string;
    rate: number | "جدید";
  }> = [
    {
      title: "برموندا",
      deliveryPrice: 10000,
      category: "فست فود",
      rate: "جدید",
    },
    { title: "برموندا", deliveryPrice: 10000, category: "فست فود", rate: 4.5 },
    {
      title: "برموندا",
      deliveryPrice: 10000,
      category: "فست فود",
      rate: "جدید",
    },
    { title: "برموندا", deliveryPrice: 10000, category: "فست فود", rate: 4.5 },
    {
      title: "برموندا",
      deliveryPrice: "رایگان",
      category: "فست فود",
      rate: "جدید",
    },
    {
      title: "برموندا",
      deliveryPrice: "رایگان",
      category: "فست فود",
      rate: 4.5,
    },
  ];

  return (
    <div className={className}>
      <Content>
        <Banner />

        <CategoryHeader
          link={{
            title: "همه دسته بندی ها",
            href: MODULES.find((e) => e.name === "marketCategories")?.url || "",
          }}
        />

        <StoryContainer
          ref={ref}
          onMouseDown={useDraggableScroll(ref).onMouseDown}
        >
          <Story title="سوپر مارکت یاران" />
          <Story title="رستوران امیرکبیر" />
          <Story title="بابل نان" />
          <Story title="گل و بلبل" />
          <Story title="موبایل فلاح" />
          <Story title="موبایل فلاح" />
          <Story title="موبایل فلاح" />
        </StoryContainer>

        <CategoryHeader title="جدیدترین ها" link={{ title: "بیشتر" }} />
        <ShopContainer
          ref={ref2}
          onMouseDown={useDraggableScroll(ref2).onMouseDown}
        >
          {ITEMS.map((item, index) => {
            return (
              <ShopItem
                key={index}
                title={item.title}
                deliveryPrice={item.deliveryPrice}
                category={item.category}
                rate={item.rate}
              />
            );
          })}
        </ShopContainer>
      </Content>
    </div>
  );
}

export default StyledMarket.withComponent(MarketModule);
