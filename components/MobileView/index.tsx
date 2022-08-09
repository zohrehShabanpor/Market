import { Main, Container } from "./styles";
import { StyledProps } from "_";
import { theme } from "@theme";

export const mainColors = {
  blue: theme.palette.blueDeFrance[100],
  green: theme.palette.paleGreen[100],
};

type Props = StyledProps<{}>;

function MobileViewComponent({
  children,
  className,
}: React.PropsWithChildren<{}> & Props): React.ReactElement {
  return (
    <div className={className}>
      <Main>{children}</Main>
    </div>
  );
}

export default Container.withComponent(MobileViewComponent);
