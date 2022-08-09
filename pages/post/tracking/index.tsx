import { MODULES } from "_";
import { Tracking } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function TrackingPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "postTracking");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Tracking />;
}

export default observer(TrackingPage);
