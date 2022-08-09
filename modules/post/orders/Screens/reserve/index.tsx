import { MODULES, StyledProps } from "_";
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
  CircleCheck,
  CircleDots,
} from "./styles";
import { theme } from "@theme";
import { FinalPrice, Order } from "#";
import { useState } from "react";
import { Edit } from "@images";

type Props = StyledProps<{}>;

function OnHoldScreen({ className }: Props): React.ReactElement {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={className}>
      <Container5>
        {[0, 1, 2].map((_, index) => {
          return (
            <Order
              title="درحال یافتن نزدیک ترین پیک"
              type="post"
              key={index}
              Icon={index % 2 === 0 ? <CircleCheck /> : <CircleDots />}
              status="onHold"
            >
              <Container3>
                <Button3
                  href="/post/tracking"
                  onClick={() => {
                    setClicked(true);
                  }}
                  backColor={theme.palette.blueDeFrance[90]}
                >
                  پیگیری سفارش
                </Button3>
                <Button3 backColor={theme.palette.coralRed[90]} outline={true}>
                  لغو درخواست
                </Button3>
              </Container3>
            </Order>
          );
        })}
      </Container5>
      <Container4>
        <Button2
          onClick={() => {
            setClicked(true);
          }}
        >
          ثبت درخواست جدید
        </Button2>
      </Container4>
    </div>
  );
}

export default Main.withComponent(OnHoldScreen);
