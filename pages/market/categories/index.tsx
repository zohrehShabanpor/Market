import { MODULES } from "_";
import { Categories } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function CategoriesPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "marketCategories");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Categories />;
}

export default observer(CategoriesPage);
