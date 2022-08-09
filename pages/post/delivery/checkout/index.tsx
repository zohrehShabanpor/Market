import { MODULES } from "_";
import { PostCheckout } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function MarketPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "postDeliveryCheckout");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <PostCheckout />;
}

export default observer(MarketPage);
