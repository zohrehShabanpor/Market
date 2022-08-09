import { mainColors } from "#/Layout";
import { Calender, Clock } from "@images";
import { useStore } from "@store";
import { observer } from "mobx-react";
import { StyledProps } from "_";
import { ItemContainer2, Date, Time } from "./styles";

type Props = StyledProps<{
  hasIcon?: boolean;
}>;

function DateTimeComponent({
  hasIcon = true,
  className,
}: Props): React.ReactElement {
  const globalStore = useStore();

  return (
    <ItemContainer2 className={className}>
      <Date themeColor={globalStore?.themeColor || mainColors.green}>
        {hasIcon ? <Calender /> : null}
        11 فروردین 1401
      </Date>
      <Time themeColor={globalStore?.themeColor || mainColors.green}>
        {hasIcon ? <Clock /> : null}
        2:47
      </Time>
    </ItemContainer2>
  );
}

export default observer(DateTimeComponent);
