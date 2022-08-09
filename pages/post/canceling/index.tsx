import { MODULES } from "_";
import { Canceling } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function CancelingPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "postCanceling");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Canceling />;
}

export default observer(CancelingPage);
