import { Button } from "./styles";
import { StyledProps } from "_";
import { CSSProperties } from "react";
import Link from "next/link";

type Props = StyledProps<{
  children?: any;
  Icon?: any;
  style?: CSSProperties;
  href?: string;
  backColor?: string;
  outline?: boolean;
  onClick?: any;
}>;

function ButtonComponent({
  className,
  children,
  Icon,
  href,
  backColor,
  style,
  ...props
}: Props): React.ReactElement {
  return (
    <Button
      href={href}
      className={className}
      Icon={Icon}
      backColor={backColor}
      {...props}
    >
      {children}
    </Button>
  );
}

export default ButtonComponent;
