import { Arrow, Check2, Clock, Dollar, Edit, Menu2, Return } from "@images";
import { theme } from "@theme";
import Link from "next/link";
import { useState } from "react";
import { StyledProps } from "_";
import {
  StyledPost,
  Container1,
  Button,
  IconButton,
  Container3,
  OptionsContainer,
  Option,
  Container4,
  Container5,
  Container6,
  Container7,
  Container8,
  SwitchBox,
} from "./styles";

type Props = StyledProps<{}>;

function DeliveryModule({ className }: Props): React.ReactElement {
  const [activeItem, setActiveItem] = useState<number>(2);

  const options = [
    {
      title: "وانت بار",

      value: 1,
    },
    { title: "پیک موتوری", value: 2 },
    { title: "سواری بار", value: 3 },
  ];

  return (
    <div className={className}>
      <Container3>
        <Container1>
          <OptionsContainer>
            {options.map((item, index) => {
              return (
                <Option
                  key={index}
                  onClick={() => setActiveItem(item.value)}
                  className={activeItem === item.value ? "active" : ""}
                >
                  <div></div>
                  {item.title}
                </Option>
              );
            })}
          </OptionsContainer>
          <Container4>
            <span>نقدی یا اعتباری</span>
            <div>
              12,000
              <span>تومان</span>
            </div>
            <Link href="/post/discount">
              <span>کد تخفیف داری؟ </span>
            </Link>
          </Container4>
          <Container5>
            <Link href="/post/delivery/delay">
              <Container6>
                <Container7>
                  <IconButton
                    Icon={<Check2 />}
                    backColor={theme.palette.sunRay[100]}
                  />
                  توقف در محل
                </Container7>
                <Arrow />
              </Container6>
            </Link>
            <Container6>
              <Container7>
                <IconButton
                  Icon={<Edit />}
                  backColor={theme.palette.sunRay[100]}
                />
                تغییرات جزئیات مبدا
              </Container7>
              <Arrow />
            </Container6>
            <Container6>
              <Container7>
                <IconButton
                  Icon={<Edit />}
                  backColor={theme.palette.sunRay[100]}
                />
                تغییرات جزئیات مقصد
              </Container7>
              <Arrow />
            </Container6>
            <Container6>
              <Container7>
                <IconButton
                  Icon={<Return />}
                  backColor={theme.palette.sunRay[100]}
                />
                بازگشت به مبدا
              </Container7>
              <SwitchBox className="first-switch" />
            </Container6>
            <Container6 style={{ transitionProperty: `` }}>
              <Container7>
                <IconButton
                  Icon={<Dollar />}
                  backColor={theme.palette.sunRay[100]}
                />
                پرداخت توسط گیرنده
              </Container7>
              <SwitchBox />
            </Container6>
          </Container5>
          <Container8>
            <Button
              iconBackground={false}
              Icon={<Menu2 />}
              href="/post/delivery/checkout"
              backColor={theme.palette.blueDeFrance[90]}
            >
              ارسال درخواست
            </Button>
            <Button
              iconBackground={false}
              Icon={<Clock />}
              href="/post/delivery/reserve"
              backColor={theme.palette.sunRay[100]}
            >
              رزرو درخواست
            </Button>
          </Container8>
        </Container1>
      </Container3>
    </div>
  );
}

export default StyledPost.withComponent(DeliveryModule);
