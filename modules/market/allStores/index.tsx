import { StyledProps } from "_";
import {
  Content,
  StyledMarket,
  Container1,
  Container2,
  Container3,
  Title,
  Button,
  ShopItem,
} from "./styles";
import { Arrow, Filter2, Sort2 } from "@images";
import { Notification, Offcanvas, OptionsList } from "#";
import { theme } from "@theme";

type Props = StyledProps<{}>;

function AllStoresModule({ className }: Props): React.ReactElement {
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

  const FILTER_ITEMS = [
    { text: "فروشگاه های باز", value: 1 },
    { text: "ارسال رایگان", value: 2 },
    { text: "دارای تخفیف", value: 3 },
  ];

  const SORT_ITEMS = [
    { text: "پرفروش ترین", value: 1 },
    { text: "بیشترین امتاز", value: 2 },
    { text: "نزدیک ترین", value: 3 },
    { text: "گران ترین", value: 4 },
    { text: "ارزان ترین", value: 5 },
    { text: "بیشترین تخفیف", value: 6 },
    { text: "جدیدترین", value: 7 },
  ];

  return (
    <div className={className}>
      <Content>
        <Container1>
          <Title>فست فود</Title>
          <Container2>
            <Container3
              data-bs-toggle="offcanvas"
              data-bs-target="#filterOffcanvas"
              aria-controls="filterOffcanvas"
            >
              <Notification value="2" />
              <Filter2 className="icon" />
              <span>فیلتر</span>
              <Arrow className="arrow" />
            </Container3>

            <Container3
              data-bs-toggle="offcanvas"
              data-bs-target="#sortOffcanvas"
              aria-controls="sortOffcanvas"
            >
              <Sort2 className="icon" />
              <span>مرتب سازی</span>
              <Arrow className="arrow" />
            </Container3>
          </Container2>
        </Container1>

        {ITEMS.map((item, index) => {
          return (
            <ShopItem
              key={index}
              rateCount="150"
              title={item.title}
              category={item.category}
              rate={item.rate}
              deliveryPrice={item.deliveryPrice}
              description="پیتزا، برگر، ساندویچ، سالاد، پیش غذا"
              status="بسته"
              topDiscount="15"
            />
          );
        })}
      </Content>

      <Offcanvas
        size={2}
        id="sortOffcanvas"
        title={
          <>
            <Sort2 />
            مرتب سازی
          </>
        }
      >
        <OptionsList items={SORT_ITEMS} />

        <Button
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          backColor={`${theme.palette.paleGreen[100]}`}
        >
          فیلتر کردن
        </Button>
      </Offcanvas>
      <Offcanvas
        id="filterOffcanvas"
        title={
          <>
            <Filter2 />
            فیلتر
          </>
        }
      >
        <OptionsList
          hasTags={true}
          getData={(data) => {}}
          multiSelect={true}
          items={FILTER_ITEMS}
        />

        <Button
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          backColor={`${theme.palette.paleGreen[100]}`}
        >
          فیلتر کردن
        </Button>
      </Offcanvas>
    </div>
  );
}

export default StyledMarket.withComponent(AllStoresModule);
