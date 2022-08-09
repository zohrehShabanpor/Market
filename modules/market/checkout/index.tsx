import { StyledProps } from "_";
import {
  StyledMarket,
  Container1,
  Container2,
  Container3,
  Container4,
  Title,
  Button,
  Map,
  Container5,
  Container6,
  Container7,
  DeActiveIcon,
  Container8,
  Container9,
  Container10,
  Container11,
  Container12,
  TextInput,
} from "./styles";
import { useState } from "react";
import { FinalPrice, ChangeButton, Calender, Offcanvas } from "#";
import { theme } from "@theme";
import { Arrow2, Calender2, Check } from "@images";

type Props = StyledProps<{}>;

function CheckoutModule({ className }: Props): React.ReactElement {
  const [activeItem, setActiveItem] = useState(2);

  const ITEMS = [
    {
      title: "اعتباری",
      description: "مانده اعتبار: 35000تومان",
      value: 1,
    },
    { title: "پرداخت آنلاین", description: "درگاه بانک سامان", value: 2 },
    {
      title: "پرداخت نقدی",
      description: "تسویه حساب با پیک در محل",
      value: 3,
    },
  ];

  return (
    <>
      <div className={className}>
        <Container1>
          <Title>آدرس تحویل</Title>
          <Container2>
            <Map />
            <Container3>
              <Container4>
                <div>نقطه دیزاین</div>
                <span>میدان جهاد(اوقاف)، جنب اندیشه 23، پلاک 2</span>
              </Container4>
              <ChangeButton />
            </Container3>
          </Container2>
        </Container1>
        <Container5>
          <Title>روش پرداخت</Title>

          {ITEMS.map((item, index) => {
            return (
              <Container6
                key={index}
                onClick={() => {
                  setActiveItem(item.value);
                }}
                className={item.value === activeItem ? "active" : ""}
              >
                <Container7>
                  <Title>{item.title}</Title>
                  <span>{item.description}</span>
                </Container7>
                {item.value === activeItem ? <Check /> : <DeActiveIcon />}
              </Container6>
            );
          })}
        </Container5>
        <Container8>
          <Container9>
            <Container10>
              <Title>رزرو درخواست</Title>
              <span>
                امکان فعال سازی با انتخاب پرداخت آنلاین یا استفاده از اعتبار
              </span>
            </Container10>
            <Arrow2
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            />
          </Container9>
        </Container8>

        <Container12>
          <TextInput
            rows={6}
            placeholder="توضیحات«برای راهنمایی بهتر فرآیند خرید و تحویل»"
          />
        </Container12>
      </div>

      <Container11>
        <Button
          backColor={theme.palette.paleGreen[100]}
          style={{
            width: `100%`,
            height: `40px`,
            color: `${theme.palette.platinum[100]}`,
            justifyContent: `center`,
          }}
        >
          {ITEMS.filter((e) => e.value === activeItem)[0]?.title}
        </Button>
        <FinalPrice price="18530" profit="3270" />
      </Container11>

      <Offcanvas
        title={
          <>
            <Calender2 />
            رزرو درخواست
          </>
        }
        id="offcanvasTop"
      >
        <Calender />

        <Button
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          backColor={theme.palette.sunRay[100]}
          style={{
            width: `100%`,
            justifyContent: `center`,
            fontSize: `16px`,
            height: `38px`,
            marginTop: `50px`,
          }}
        >
          رزرو درخواست
        </Button>
      </Offcanvas>
    </>
  );
}

export default StyledMarket.withComponent(CheckoutModule);
