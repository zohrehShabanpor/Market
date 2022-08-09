import { MODULES } from "_";
import { Auth } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function AuthPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "auth");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Auth />;
  // return <span>s</span>;
}

export default observer(AuthPage);
