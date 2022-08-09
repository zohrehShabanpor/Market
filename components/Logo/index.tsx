import { StyledLogo } from "./styles";
import { StyledProps } from "_";

type Props = StyledProps<{}>;

function LogoComponent({ className }: Props): React.ReactElement {
  return <div className={className}></div>;
}

export default StyledLogo.withComponent(LogoComponent);
