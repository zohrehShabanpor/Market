import { MODULES } from "_";
import { Details } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function DetailsPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "marketCartDetails");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Details />;
}

export default observer(DetailsPage);
