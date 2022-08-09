import { Check, dashedLine } from "@images";
import { StyledProps } from "_";
import {
  ItemContainer5,
  ItemContainer6,
  ItemContainer7,
  Line,
  LineFill,
} from "./styles";
import React from "react";
import { useStore } from "@store";
import { mainColors } from "#/Layout";
import { observer } from "mobx-react";

type Props = StyledProps<{
  hasCaption?: boolean;
}>;

function OrderComponent({
  hasCaption,
}: Props & React.PropsWithChildren<{}>): React.ReactElement {
  const globalStore = useStore();

  return (
    <ItemContainer5>
      <ItemContainer6 themeColor={globalStore?.themeColor || mainColors.green}>
        {/* <Line src={dashedLine.src} /> */}
        <Line>
          <LineFill></LineFill>
        </Line>
        <Check />
        <Check />
      </ItemContainer6>
      <ItemContainer7>
        <span>
          <span className="title">بابل، توحید 7</span>
          {hasCaption ? (
            <span className="caption">بابل، چهارراه تختی</span>
          ) : null}
        </span>
        <span>
          <span className="title">بابل، توحید 36</span>
          {hasCaption ? (
            <span className="caption">بابل، چهارراه تختی</span>
          ) : null}
        </span>
      </ItemContainer7>
    </ItemContainer5>
  );
}

export default observer(OrderComponent);
