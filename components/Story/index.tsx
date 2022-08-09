import { StyledLogo, Logo, Container, Container2, Title } from "./styles";
import { useState } from "react";
import { StyledProps } from "_";
import { observer } from "mobx-react";
import { useStore } from "@store";
import { mainColors } from "#/Layout";
import Story from "./Story";

type Props = StyledProps<{
  title?: string;
  stories?: Array<string>;
}>;

function StoryComponent({
  className,
  stories,
  title,
}: Props): React.ReactElement {
  const globalStore = useStore();
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <>
      <StyledLogo className={className}>
        <Logo
          onClick={() => {
            setIsStoryOpen(true);
          }}
          themeColor={globalStore?.themeColor || mainColors.blue}
        >
          <Container2 className="story-border" hasStory={stories?.length !== 0}>
            <Container></Container>
          </Container2>
        </Logo>
        {title ? <Title>{title}</Title> : null}
      </StyledLogo>

      {isStoryOpen ? (
        <Story getIsStoryOpen={(data) => setIsStoryOpen(data)} />
      ) : null}
    </>
  );
}

export default observer(StoryComponent);
