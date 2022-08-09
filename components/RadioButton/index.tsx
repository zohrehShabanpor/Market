import { StyledProps } from "_";
import { RadioButton, RadioButtonInside } from "./styles";

type Props = StyledProps<{
  isActive?: boolean;
  color?: string;
}>;

function MarketComponent({
  isActive = false,
  className,
  color,
}: Props): React.ReactElement {
  return (
    <RadioButton backColor={color} className={className}>
      <RadioButtonInside
        className={isActive ? "active" : ""}
      ></RadioButtonInside>
    </RadioButton>
  );
}

export default MarketComponent;
