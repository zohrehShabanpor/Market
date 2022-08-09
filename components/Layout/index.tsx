import BottomNavigation from "../BottomNavigation";
import TopBar from "../TopBar";
import { Main } from "./styles";
import { StyledProps } from "_";
import { theme } from "@theme";
import { useStore } from "@store";
import { observer } from "mobx-react";

export const mainColors = {
  blue: theme.palette.blueDeFrance[100],
  brightBlue: theme.palette.blueDeFrance[90],
  green: theme.palette.paleGreen[100],
};

type Props = StyledProps<{}>;

function LayoutComponent({
  children,
}: React.PropsWithChildren<{}> & Props): React.ReactElement {
  const globalStore = useStore();
  let module = globalStore.currentModule;

  return (
    <>
      {module?.hasTopBar === false ? null : <TopBar />}
      <Main>{children}</Main>
      {module?.hasNavigation === false ? null : <BottomNavigation />}
    </>
  );
}

export default observer(LayoutComponent);
