import { MODULES } from "_";
import { Delay } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function MarketPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "postDeliveryDelay");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Delay />;
}

export default observer(MarketPage);
