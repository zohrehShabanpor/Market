import { StyledButton } from "./styles";
import { StyledProps } from "_";
import { CSSProperties, HTMLAttributes } from "react";
import Link from "next/link";

type Props = StyledProps<{
  children?: any;
  Icon?: any;
  style?: CSSProperties;
  href?: string;
  backColor?: string;
  outline?: boolean;
  onClick?: any;
  iconBackground?: boolean;
  data?: HTMLAttributes<HTMLDivElement>;
}>;

function ButtonComponent({
  className,
  children,
  Icon,
  href,
  backColor,
  style,
  outline = false,
  iconBackground = true,
  onClick,
  data,
  ...props
}: Props): React.ReactElement {
  return (
    <>
      {href ? (
        <Link href={href}>
          <StyledButton
            iconBackground={iconBackground}
            onClick={onClick}
            outline={outline}
            style={style}
            backColor={backColor}
            className={className + " button-container"}
            {...data}
            {...props}
          >
            {children}
            {Icon ? <span className="icon-container">{Icon}</span> : null}
          </StyledButton>
        </Link>
      ) : (
        <StyledButton
          iconBackground={iconBackground}
          onClick={onClick}
          outline={outline}
          style={style}
          backColor={backColor}
          className={className + " button-container"}
          {...data}
          {...props}
        >
          {children}
          {Icon ? <span className="icon-container">{Icon}</span> : null}
        </StyledButton>
      )}
    </>
  );
}

export default ButtonComponent;
