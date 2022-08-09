import { StyledShop, Container, Header } from "./styles";
import { StyledProps } from "_";
import { Title } from "#";
import Item from "./Item";

type Props = StyledProps<{
  title: string;
}>;

function ShopComponent({ className, title }: Props): React.ReactElement {
  return (
    <div className={className}>
      <Header>
        <Title title={title} />
      </Header>
      <Container>
        <Item
          title="مایع پاک کننده سرویس بهداشتی من 1 لیتری"
          discount="15"
          originalPrice="10900"
          finalPrice="9265"
          count={3}
          warn="تنها 2 عدد در اتبار فروشگاه باقی مانده"
        />
        <Item
          title="مایع پاک کننده سرویس بهداشتی من 1 لیتری"
          discount="15"
          originalPrice="10900"
          finalPrice="9265"
          count={6}
        />
        <Item
          title="مایع  "
          discount="15"
          originalPrice="10900"
          finalPrice="9265"
          count={2}
        />
        <Item
          title="مایع پاک کننده سرویس بهداشتی من 1 لیتری"
          discount="15"
          originalPrice="10900"
          finalPrice="9265"
        />
        <Item
          title="مایع پاک کننده سرویس بهداشتی من 1 لیتری"
          discount="15"
          originalPrice="10900"
          finalPrice="9265"
        />
        <Item
          title="مایع پاک کننده سرویس بهداشتی من 1 لیتری"
          discount="15"
          originalPrice="10900"
          finalPrice="9265"
        />
        <Item
          title="مایع پاک کننده سرویس بهداشتی من 1 لیتری"
          discount="15"
          originalPrice="10900"
          finalPrice="9265"
        />
        <Item
          title="مایع پاک کننده سرویس بهداشتی من 1 لیتری"
          discount="15"
          originalPrice="10900"
          finalPrice="9265"
          count={10}
        />
      </Container>
    </div>
  );
}

export default StyledShop.withComponent(ShopComponent);
