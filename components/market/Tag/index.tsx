import { Close2 } from "@images";
import { StyledProps } from "_";
import { ItemTitle } from "./styles";

type Props = StyledProps<{
  item?: { text: string; value: number };
  onDelete?: (value: number) => void;
}>;

function TagComponent({
  item,
  className,
  onDelete,
}: Props): React.ReactElement {
  return (
    <div className={className}>
      {item?.text}
      <Close2
        onClick={() => {
          if (onDelete && item?.value) onDelete(item?.value);
        }}
      />
    </div>
  );
}

export default ItemTitle.withComponent(TagComponent);
