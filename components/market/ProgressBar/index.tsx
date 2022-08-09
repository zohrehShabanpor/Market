import { Check } from "@images";
import { theme } from "@theme";
import { StyledProps } from "_";
import {
  ItemContainer8,
  ButtonProgress,
  Progress,
  ProgressBar,
} from "./styles";

type Props = StyledProps<{}>;

function ProgressBarComponent({ className }: Props): React.ReactElement {
  return (
    <div className={className}>
      <ButtonProgress backColor={theme.palette.paleGreen[100]} Icon={<Check />}>
        <span>
          سفارش
          <span>23:00</span>
        </span>
      </ButtonProgress>
      <ButtonProgress backColor={theme.palette.sunRay[100]} Icon={<Check />}>
        <span>
          تحویل
          <span>23:45</span>
        </span>
      </ButtonProgress>
      <Progress>
        <ProgressBar percent="20%"></ProgressBar>
      </Progress>
    </div>
  );
}

export default ItemContainer8.withComponent(ProgressBarComponent);
