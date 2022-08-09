import { MODULES } from "_";
import { AllStores } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function AllStoresPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "marketAllStores");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <AllStores />;
}

export default observer(AllStoresPage);
