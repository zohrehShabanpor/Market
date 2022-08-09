import { MODULES } from "_";
import { Verify } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function VerifyPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "authVerify");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <Verify />;
}

export default observer(VerifyPage);
