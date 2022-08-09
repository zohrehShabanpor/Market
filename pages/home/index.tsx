import { MODULES } from "_";
import { Home } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function HomePage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "home");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Home />;
}

export default observer(HomePage);
