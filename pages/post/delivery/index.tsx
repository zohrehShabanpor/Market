import { MODULES } from "_";
import { Delivery } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function MarketPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "postDelivery");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Delivery />;
}

export default observer(MarketPage);
