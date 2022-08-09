import { theme } from "@theme";
import { useState } from "react";
import { StyledProps } from "_";
import {
  StyledPost,
  Container1,
  Container2,
  Container3,
  Button,
  Button2,
} from "./styles";

type Props = StyledProps<{}>;

function CheckoutModule({ className }: Props): React.ReactElement {
  const [warnClicked, setWarnClicked] = useState<boolean>(false);

  return (
    <div className={className}>
      <Container3>
        <Container1>
          <Container2>
            <span>نقدی یا اعتباری؟</span>
            <span
              style={{ visibility: warnClicked ? `visible` : `hidden` }}
              className="warn"
            >
              با پرداخت آنلاین 20 درصد تخفیف دریافت میکنید.
            </span>
            <div onClick={() => setWarnClicked((warnClicked) => !warnClicked)}>
              i
            </div>
          </Container2>
          <Container2>
            <Button2 backColor={theme.palette.blueDeFrance[90]}>
              پرداخت آنلاین
            </Button2>
            <span>
              <span>10,000</span>
              <span>تومان</span>
            </span>
          </Container2>
          <Container2>
            <Button2
              style={{ color: theme.palette.platinum[80] }}
              backColor={theme.palette.platinum[80]}
              outline={true}
            >
              استفاده از اعتبار
            </Button2>
            <span>شارژ حساب</span>
          </Container2>
          <Button
            href="/post/searching"
            backColor={theme.palette.paleGreen[80]}
          >
            پرداخت آنلاین
          </Button>
        </Container1>
      </Container3>
    </div>
  );
}

export default StyledPost.withComponent(CheckoutModule);
