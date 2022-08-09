import { CSSProperties } from "@mui/styled-engine";
import { useState } from "react";
import { StyledProps } from "_";
import { SwitchContainer, Thumb } from "./styles";

type Props = StyledProps<{}>;

function PostModule({ className }: Props): React.ReactElement {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <SwitchContainer
      className={className}
      onClick={() => setClicked((clicked) => !clicked)}
    >
      <Thumb
        style={
          clicked
            ? {
                animationName: `moveLeft `,
                left: `4px`,
              }
            : {
                animationName: `moveRight`,
              }
        }
      ></Thumb>
    </SwitchContainer>
  );
}

export default PostModule;
