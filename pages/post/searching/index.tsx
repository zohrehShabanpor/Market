import { MODULES } from "_";
import { Searching } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function SearchingPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "postSearching");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Searching />;
}

export default observer(SearchingPage);
