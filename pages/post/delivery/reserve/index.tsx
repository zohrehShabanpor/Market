import { MODULES } from "_";
import { Reserve } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function MarketPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "postDeliveryReserve");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Reserve />;
}

export default observer(MarketPage);
