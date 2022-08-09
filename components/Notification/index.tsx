import { StyledNotification } from "./styles";
import { StyledProps } from "_";

type Props = StyledProps<{
  value: string;
}>;

function NotificationComponent({
  className,
  value,
}: Props): React.ReactElement {
  return (
    <div className={className + " notification-container"}>
      <div>{value}</div>
    </div>
  );
}

export default StyledNotification.withComponent(NotificationComponent);
