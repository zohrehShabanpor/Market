import { MODULES } from "_";
import { Market } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function MarketPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "market");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Market />;
}

export default observer(MarketPage);
