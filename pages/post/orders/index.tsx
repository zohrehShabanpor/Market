import { MODULES } from "_";
import { Orders } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function MarketPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "postOrders");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Orders />;
}

export default observer(MarketPage);
