import { Plus, Star } from "@images";
import { theme } from "@theme";
import { useState } from "react";
import { StyledProps } from "_";
import { StyledPost } from "./styles";
import {
  SourcePrimary,
  DestinationPrimary,
  SourceSecondary,
  DestinationSecondary,
} from "./screens";

type Props = StyledProps<{}>;

function PostModule({ className }: Props): React.ReactElement {
  const [source, setSource] = useState({ primary: false, secondary: false });
  const [destination, setDestination] = useState({
    primary: false,
    secondary: false,
  });

  return (
    <div className={className}>
      {source.primary === false ? (
        <SourcePrimary
          onSubmit={() => setSource({ primary: true, secondary: false })}
        />
      ) : source.secondary === false ? (
        <SourceSecondary
          onSubmit={() => setSource({ primary: true, secondary: true })}
        />
      ) : destination.primary === false ? (
        <DestinationPrimary
          onSubmit={() => setDestination({ primary: true, secondary: false })}
        />
      ) : (
        <DestinationSecondary
          onSubmit={() => setDestination({ primary: true, secondary: true })}
        />
      )}
    </div>
  );
}

export default StyledPost.withComponent(PostModule);
