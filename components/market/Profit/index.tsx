import { Discount } from "./styles";
import { StyledProps } from "_";
import React from "react";

type Props = StyledProps<{
  size?: 1 | 2;
}>;

function ProfitComponent({
  children,
  size = 1,
}: Props & React.PropsWithChildren<{}>): React.ReactElement {
  return <Discount size={size}>{children}</Discount>;
}

export default ProfitComponent;
