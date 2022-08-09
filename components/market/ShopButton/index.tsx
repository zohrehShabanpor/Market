import { StyledButton, Button } from "./styles";
import { StyledProps } from "_";
import { Plus, Trash, Minus } from "@images";
import { useEffect, useState } from "react";
import { theme } from "@theme";

type Props = StyledProps<{
  value?: number;
  type?: 1 | 2;
  isDeleted?: (data: boolean) => void;
}>;

function ShopButtonComponent({
  className,
  value,
  type = 1,
  isDeleted,
}: Props): React.ReactElement {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value) setCount(value);
  }, [value]);

  return (
    <>
      {type === 1 ? (
        <div
          style={{ width: count === 0 ? `30px` : `86px` }}
          className={className}
        >
          <Plus
            onClick={() => {
              setCount(count + 1);
            }}
          />
          {count !== 0 ? (
            <>
              {count}
              {count === 1 ? (
                <Trash
                  onClick={() => {
                    if (isDeleted) isDeleted(true);
                    else setCount(0);
                  }}
                />
              ) : (
                <Minus
                  onClick={() => {
                    setCount(count - 1);
                  }}
                />
              )}
            </>
          ) : null}
        </div>
      ) : (
        <Button
          style={{ justifyContent: count === 0 ? `center` : `space-between` }}
          outline={count === 0 ? true : false}
          backColor={theme.palette.paleGreen[100]}
        >
          {count === 0 ? (
            <span
              onClick={() => {
                setCount(count + 1);
              }}
            >
              افزودن به سبد خرید
            </span>
          ) : (
            <>
              <Plus
                onClick={() => {
                  setCount(count + 1);
                }}
              />
              <span>{count} عدد اضافه شد</span>

              <Minus
                onClick={() => {
                  setCount(count - 1);
                }}
              />
            </>
          )}
        </Button>
      )}
    </>
  );
}

export default StyledButton.withComponent(ShopButtonComponent);
