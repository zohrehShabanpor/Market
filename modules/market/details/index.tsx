import { StyledProps } from "_";
import {
  Content,
  StyledMarket,
  Arrow,
  Offcanvas,
  Header,
  Container1,
  Text1,
  Text2,
  Text3,
  Container2,
  Container3,
  Container4,
  Item,
  ItemContainer1,
  ItemTitle,
  ItemCount,
  Container5,
  Button,
  Container6,
  Container7,
  DateTime,
  ReseedHeader,
  Title,
  Container8,
} from "./styles";
import { useEffect, useState } from "react";
import { ProgressBar, ChangeButton } from "#";
import { theme } from "@theme";
import { Calender2, Telephone } from "@images";
import { useRouter } from "next/router";
import { useStore } from "@store";
import { CartItems } from "pages/market/cart";
import { observer } from "mobx-react";

type Props = StyledProps<{}>;

function DetailsModule({ className }: Props): React.ReactElement {
  const [isReserved, setIsReserved] = useState<boolean>();
  const router = useRouter();
  const globalStore = useStore();

  const ITEMS = [
    { title: "پیتزا قارچ و گوشت", count: "1", price: "110000" },
    { title: "ساندویچ ویژه", count: "2", price: "100000" },
    { title: "نوشابه فانتا", count: "2", price: "10000" },
  ];

  useEffect(() => {
    setIsReserved(globalStore.activeCartItem === CartItems.Reserved);
  }, [globalStore]);

  return (
    <div className={className}>
      <Arrow onClick={() => router.back()} />

      <Content
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      ></Content>

      <Offcanvas
        size={4}
        hasCloseButton={false}
        title={<Title title="پیگیری خرید از فست فود برموندا" />}
        headerChildren={<DateTime />}
        id="offcanvasTop"
      >
        <Container1>
          <Text1>
            تحویل به <span>استودیو نقطه دیزاین</span>
          </Text1>
          <Text2>
            بابل، چهارراه تختی، جانبازان، توحید 7، مشاور املاک خانه راحت
          </Text2>
        </Container1>

        {isReserved ? (
          <Container6>
            <Container7>
              <Calender2 />
              رزور شده برای تاریخ:
            </Container7>
            <DateTime hasIcon={false} />
            <ChangeButton />
          </Container6>
        ) : (
          <Container2>
            <Text3>سفارش در حال آماده سازی و ارسال برای شماست</Text3>
            <ProgressBar />
          </Container2>
        )}

        <Container3>
          <Container4>
            <ReseedHeader
              title="فاکتور"
              link={isReserved ? { title: "افزودن" } : undefined}
            />
          </Container4>
          {ITEMS.map((item, index) => {
            return (
              <Item key={index}>
                <ItemContainer1>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemCount>({item.count})</ItemCount>
                </ItemContainer1>
                <ItemContainer1>
                  <ItemTitle>{item.price} تومان</ItemTitle>
                </ItemContainer1>
              </Item>
            );
          })}
        </Container3>

        <Container5>
          <span>مجموع</span>
          <span>110000 تومان</span>
        </Container5>
        <Container5>
          <span>هزینه ارسال</span>
          <span>10000 تومان</span>
        </Container5>
        <Container5 className="total">
          <span>جمع کل</span>
          <span>230000 تومان</span>
        </Container5>

        <Container8>
          {isReserved ? (
            <Button outline={true} backColor={theme.palette.coralRed[90]}>
              لغو سفارش
            </Button>
          ) : null}

          <Button
            Icon={<Telephone />}
            outline={true}
            backColor={theme.palette.blueDeFrance[100]}
          >
            تماس با پشتیابانی
          </Button>
        </Container8>
      </Offcanvas>
    </div>
  );
}

export default StyledMarket.withComponent(observer(DetailsModule));
