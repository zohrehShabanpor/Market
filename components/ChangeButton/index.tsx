import { StyledProps } from "_";
import { Button } from "./styles";
import { theme } from "@theme";
import { Edit } from "@images";

type Props = StyledProps<{
  onClick?: any;
}>;

function ChangeButtonComponent({
  className,
  onClick,
}: Props): React.ReactElement {
  return (
    <Button
      onClick={onClick}
      className={className}
      Icon={<Edit />}
      backColor={theme.palette.sunRay[100]}
    >
      تغییر
    </Button>
  );
}

export default ChangeButtonComponent;
