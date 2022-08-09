import { MODULES, StyledProps } from "_";
import { Shop } from "../../components";
import {
  PaymentContainer,
  Container,
  Container2,
  ShopContainer,
  Main,
  Button,
  Button2,
  Container3,
  Button3,
  Container4,
  Container5,
} from "./styles";
import { theme } from "@theme";
import { FinalPrice, Order } from "#";
import { useState } from "react";
import { CircleCheck, CircleDots } from "@images";

type Props = StyledProps<{}>;

function OnHoldScreen({ className }: Props): React.ReactElement {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={className}>
      {clicked ? (
        <>
          <ShopContainer>
            <Shop title="سوپرمارکت رایان" />
          </ShopContainer>
          <PaymentContainer>
            <Button
              style={{ height: `38px` }}
              outline={true}
              backColor={theme.palette.blueDeFrance[100]}
            >
              هزینه ارسال این سفارش 10,000 تومان می باشد
            </Button>
            <Container>
              <Container2>
                <Button
                  style={{ fontSize: `16px`, height: `40px` }}
                  outline={true}
                  backColor={theme.palette.paleGreen[100]}
                >
                  کد تخفیف
                </Button>
                <FinalPrice price="18530" profit="3270" />
              </Container2>
              <Button2
                href={
                  MODULES.find((e) => e.name === "marketCartCheckout")?.url ||
                  ""
                }
              >
                تایید نهایی و پرداخت
              </Button2>
            </Container>
          </PaymentContainer>
        </>
      ) : (
        <>
          <Container5>
            {[0, 1, 2].map((_, index) => {
              return (
                <Order
                  key={index}
                  Icon={index % 2 === 0 ? <CircleCheck /> : <CircleDots />}
                  status="onHold"
                >
                  <Container3>
                    <Button3
                      onClick={() => {
                        setClicked(true);
                      }}
                      backColor={theme.palette.sunRay[100]}
                    >
                      ادامه خرید
                    </Button3>
                    <Button3
                      backColor={theme.palette.coralRed[90]}
                      outline={true}
                    >
                      حذف از سبد خرید
                    </Button3>
                  </Container3>
                </Order>
              );
            })}
          </Container5>
          <Container4>
            <Button2
              className="button"
              onClick={() => {
                setClicked(true);
              }}
            >
              ثبت درخواست جدید
            </Button2>
          </Container4>
        </>
      )}
    </div>
  );
}

export default Main.withComponent(OnHoldScreen);
