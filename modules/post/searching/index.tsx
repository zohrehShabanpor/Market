import { Clock } from "@images";
import { theme } from "@theme";
import { useMemo, useRef, useState } from "react";
import { StyledProps } from "_";
import { StyledPost, Container1, Container2, Button } from "./styles";

type Props = StyledProps<{}>;

function SearchingModule({ className }: Props): React.ReactElement {
  const [counter, setCounter] = useState(0);
  const [holding, setHolding] = useState(false);
  const counterRef = useRef<number | null>(null);
  counterRef.current = counter;
  const holdingRef = useRef<boolean | null>(null);
  holdingRef.current = holding;

  const startInterval = () => {
    const interval = setInterval(() => {
      if (holdingRef.current === true) {
        if (counterRef.current !== null && counterRef?.current < 3)
          setCounter((counter) => counter + 1);
        else clearInterval(interval);
      } else clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  };

  useMemo(() => {
    if (!holding) return;

    startInterval();
  }, [holding]);

  return (
    <div className={className}>
      <Container1>
        <span>درحال یافتن نزدیک ترین پیک برای شما</span>
        <span>بدون اعتماد، زندگی سخته...</span>
      </Container1>
      <Container2>
        <Button
          href="/post/orders"
          style={{
            flexGrow: `1`,
            width: `fit-content`,
            color: theme.palette.blueDeFrance[90],
          }}
          Icon={<Clock />}
          iconBackground={false}
          backColor={theme.palette.sunRay[100]}
        >
          سفارش ها
        </Button>
        <Button
          data={{
            onTouchStart: () => {
              setHolding(true);
            },
            onMouseDown: () => {
              setHolding(true);
            },
            onTouchEnd: () => {
              setHolding(false);
              setCounter(0);
            },
            onMouseUp: () => {
              setHolding(false);
              setCounter(0);
            },
          }}
          style={{
            flexGrow: `1`,
            width: `fit-content`,
            height: `40px`,
            animationName: holding ? "close" : "",
          }}
        >
          لغو درخواست
        </Button>
        <Button
          style={{ width: `100%` }}
          backColor={theme.palette.blueDeFrance[90]}
        >
          ثبت درخواست جدید
        </Button>
      </Container2>
    </div>
  );
}

export default StyledPost.withComponent(SearchingModule);
