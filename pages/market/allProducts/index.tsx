import { MODULES } from "_";
import { AllProducts } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function AllProductsPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "marketAllProducts");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <AllProducts />;
}

export default observer(AllProductsPage);
