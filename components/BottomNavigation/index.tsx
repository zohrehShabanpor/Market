import Item from "./BottomNavigationAction";
import { MODULES, StyledProps } from "_";
import { StyledBottomNavigation } from "./styles";

type Props = StyledProps<{}>;

function BottomNavigationComponent({ className }: Props): React.ReactElement {
  return (
    <StyledBottomNavigation className={className}>
      {MODULES.filter((e) => e.showInMenu).map((item) => (
        <Item key={item.name} module={item} />
      ))}
    </StyledBottomNavigation>
  );
}

export default BottomNavigationComponent;
