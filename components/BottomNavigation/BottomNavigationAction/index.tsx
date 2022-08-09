import { StyledBottomNavigationAction, Item } from "./styles";
import { StyledProps, Module } from "_";
import { useStore } from "@store";
import { observer } from "mobx-react";
import { mainColors } from "#/Layout";
import Link from "next/link";

type Props = StyledProps<{
  module: Module;
}>;

function BottomNavigationActionComponent({
  className,
  module,
}: Props): React.ReactElement {
  const globalStore = useStore();
  return (
    <Link href={`${module.url}` || "/"}>
      <StyledBottomNavigationAction
        themeColor={globalStore.themeColor || mainColors.blue}
        active={
          globalStore.currentModule?.name === module.name ||
          globalStore?.currentModule?.parent === module.name
        }
        className={className}
        onClick={() => {
          globalStore.setModule(module);
        }}
      >
        <Item>{module.title}</Item>
      </StyledBottomNavigationAction>
    </Link>
  );
}

export default observer(BottomNavigationActionComponent);
