import { StyledInput, Input, Container, Label } from "./styles";
import { StyledProps } from "_";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { InputHTMLAttributes } from "react";

type Props = StyledProps<{
  Icon?:
    | OverridableComponent<SvgIconTypeMap<{}, "svg">>
    | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  props?: InputHTMLAttributes<HTMLTextAreaElement>;
  label?: string | React.ReactElement;
  style?: any;
  hasStar?: boolean;
}>;

function InputComponent({
  Icon,
  props,
  label,
  style,
  hasStar,
  className,
}: Props): React.ReactElement {
  return (
    <div style={style} className={className}>
      {label ? (
        <Label>
          {label} {hasStar ? <span className="star">*</span> : null}
        </Label>
      ) : null}
      <Container
        readOnly={props?.readOnly || false}
        required={hasStar || false}
        className="input-container"
      >
        <>
          <Input dir="rtl" {...props} />
          {Icon ? Icon : null}
        </>
      </Container>
    </div>
  );
}

export default StyledInput.withComponent(InputComponent);
