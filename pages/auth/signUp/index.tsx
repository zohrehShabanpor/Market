import { MODULES } from "_";
import { SignUp } from "@modules";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { useEffect } from "react";

function SignUpPage(): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "authSignUp");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return <SignUp />;
}

export default observer(SignUpPage);
