import { MODULES } from "_";
import { Product } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function ProductPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "marketProduct");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Product />;
}

export default observer(ProductPage);
