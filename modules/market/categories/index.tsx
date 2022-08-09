import { MODULES, StyledProps } from "_";
import { ShopItem } from "#";
import {
  StyledMarket,
  ShopContainer,
  Content,
  CategoryHeader,
  Banner,
} from "./styles";
import { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";

type Props = StyledProps<{}>;

function CategoriesModule({ className }: Props): React.ReactElement {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  let url = MODULES.find((e) => e.name === "marketAllStores")?.url || "";

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
        <CategoryHeader title="فست فود" link={{ title: "بیشتر", href: url }} />
        <ShopContainer
          ref={ref}
          onMouseDown={useDraggableScroll(ref).onMouseDown}
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

        <CategoryHeader title="رستوران" link={{ title: "بیشتر", href: url }} />
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

        <Banner hasPagination={false} />

        <CategoryHeader
          title="سوپرمارکت"
          link={{ title: "بیشتر", href: url }}
        />
        <ShopContainer
          ref={ref3}
          onMouseDown={useDraggableScroll(ref3).onMouseDown}
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

export default StyledMarket.withComponent(CategoriesModule);
