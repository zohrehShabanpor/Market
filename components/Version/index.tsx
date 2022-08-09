import { CSSProperties } from "react";
import { StyledProps } from "_";
import { Version } from "./styles";

type Props = StyledProps<{
  style?: CSSProperties;
}>;

function VersionComponent({ className, style }: Props): React.ReactElement {
  return (
    <div style={style} className={className}>
      نسخه 01,2
    </div>
  );
}

export default Version.withComponent(VersionComponent);
