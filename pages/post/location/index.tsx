import { MODULES } from "_";
import { Location } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function MarketPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "postLocation");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Location />;
}

export default observer(MarketPage);
