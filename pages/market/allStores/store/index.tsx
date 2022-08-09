import { MODULES } from "_";
import { Store } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function StorePage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "marketStore");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Store />;
}

export default observer(StorePage);
