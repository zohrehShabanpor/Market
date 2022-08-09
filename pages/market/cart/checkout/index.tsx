import { MODULES } from "_";
import { Checkout } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function CheckoutPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "marketCartCheckout");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Checkout />;
}

export default observer(CheckoutPage);
