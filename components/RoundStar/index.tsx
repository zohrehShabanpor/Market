import { StyledProps } from "_";
import { Star } from "@images";
import { Container } from "./styles";

type Props = StyledProps<{}>;

function RoundStarComponent({ className }: Props): React.ReactElement {
  return (
    <div className={className}>
      <Star />
    </div>
  );
}

export default Container.withComponent(RoundStarComponent);
