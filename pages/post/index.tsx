import { MODULES } from "_";
import { Post } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function MarketPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "post");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Post />;
}

export default observer(MarketPage);
