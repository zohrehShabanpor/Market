import { StyledProps } from "_";
import { Items, Comments } from "./screens";
import { Content, StyledMarket, ShopItem } from "./styles";
import { useState } from "react";

type Props = StyledProps<{}>;

function StoreModule({ className }: Props): React.ReactElement {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className={className}>
      <Content>
        <ShopItem
          rateCount="150"
          title="راح فود"
          category="فست فود"
          rate={4.5}
          deliveryPrice="رایگان"
          description="پیتزا، برگر، ساندویچ، سالاد، پیش غذا"
          status="بسته"
          topDiscount="15"
          hasButtons={true}
          hasLink={false}
          getActiveButton={(data) => {
            setActiveItem(data);
          }}
        />
        {activeItem === 1 ? <Items /> : <Comments />}
      </Content>
    </div>
  );
}

export default StyledMarket.withComponent(StoreModule);
