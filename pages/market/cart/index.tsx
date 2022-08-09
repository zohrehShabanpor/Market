import { MODULES } from "_";
import { Cart } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

export enum CartItems {
  onHold,
  Doing,
  Reserved,
}

function CartPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "marketCart");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Cart />;
}

export default observer(CartPage);
