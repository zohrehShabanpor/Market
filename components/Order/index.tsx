import { Calender2, Check, dashedLine } from "@images";
import { addComma, StyledProps } from "_";
import { DateTime, ProgressBar, Title } from "#";
import {
  ItemContainer,
  ItemContainer2,
  ItemContainer3,
  ItemContainer13,
  Info,
  ItemContainer4,
  ItemContainer5,
  ItemContainer6,
  ItemContainer7,
  ItemContainer10,
  ItemContainer11,
  Line,
} from "./styles";
import React from "react";
import { useStore } from "@store";
import { mainColors } from "#/Layout";

type Props = StyledProps<{
  status?: "reserved" | "onHold" | "doing";
  type?: "post" | "shop";
  Icon: React.ReactElement;
  title?: string;
}>;

function OrderComponent({
  status = "doing",
  children,
  type = "shop",
  Icon,
  className,
  title,
}: Props & React.PropsWithChildren<{}>): React.ReactElement {
  const globalStore = useStore();

  return (
    <div className={className}>
      <ItemContainer2>
        <Title title={title} />
        <DateTime />
      </ItemContainer2>

      <ItemContainer3>
        <ItemContainer13>
          {type === "post" ? (
            <Info>
              <div>پرداخت توسط</div>
              <span>گیرنده</span>
            </Info>
          ) : null}
          <Info>
            <div>نوع پرداخت</div>
            <span>آنلاین</span>
          </Info>
          {type === "post" ? null : (
            <Info>
              <div>هزینه ارسال</div>
              <span>
                {addComma(10000)}
                <span>تومان</span>
              </span>
            </Info>
          )}
          <Info>
            <div>مبلغ قابل پرداخت</div>
            <span>
              {addComma(18530)}
              <span>تومان</span>
            </span>
          </Info>
        </ItemContainer13>

        {status === "reserved" ? (
          <ItemContainer10>
            <ItemContainer11>
              <Calender2 />
              <span>رزرو شده برای تاریخ:</span>
            </ItemContainer11>
            <DateTime hasIcon={false} />
          </ItemContainer10>
        ) : null}
      </ItemContainer3>

      <ItemContainer4>
        <ItemContainer5>
          <ItemContainer6
            themeColor={globalStore?.themeColor || mainColors.green}
          >
            <Line src={dashedLine.src} />
            <Check />
            <Check />
          </ItemContainer6>
          <ItemContainer7>
            <span>بابل، توحید 7</span>
            <span>بابل، توحید 36</span>
          </ItemContainer7>
        </ItemContainer5>
        {Icon}
      </ItemContainer4>

      {status !== "doing" ? null : <ProgressBar />}

      {children ? children : null}
    </div>
  );
}

export default ItemContainer.withComponent(OrderComponent);
