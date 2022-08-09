import { mainColors } from "#/Layout";
import { LogoIcon } from "@images";
import { useStore } from "@store";
import { observer } from "mobx-react";
import { StyledProps } from "_";
import { ItemTitle } from "./styles";

type Props = StyledProps<{
  title?: string;
}>;

function TitleComponent({
  title = "خرید از فست فود برموندا",
  className,
}: Props): React.ReactElement {
  const globalStore = useStore();

  return (
    <ItemTitle
      themeColor={globalStore?.themeColor || mainColors.green}
      className={className}
    >
      <LogoIcon />
      {title}
    </ItemTitle>
  );
}

export default observer(TitleComponent);
