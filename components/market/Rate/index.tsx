import { Rate } from "./styles";
import { StyledProps } from "_";
import { Star } from "@images";

type Props = StyledProps<{
  rate: number;
  size?: 1 | 2;
}>;

function RateComponent({ rate, size = 1 }: Props): React.ReactElement {
  return (
    <Rate size={size}>
      <span>{String(rate).replace(".", ",")}</span>
      <Star />
    </Rate>
  );
}

export default RateComponent;
