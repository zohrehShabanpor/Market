import { useState } from "react";
import { StyledProps } from "_";
import { Add, Edit, Main } from "./screens";
import { StyledPost } from "./styles";

type Props = StyledProps<{}>;

function LocationModule({ className }: Props): React.ReactElement {
  const [change, setChange] = useState(false);
  const [add, setAdd] = useState(false);

  return (
    <div className={className}>
      {change ? (
        <Edit
          onSubmit={() => {
            setChange(false);
            setAdd(false);
          }}
        />
      ) : add ? (
        <Add />
      ) : (
        <Main
          onSubmit={(data) => {
            if (data === 1) {
              setChange(true);
              setAdd(false);
            } else {
              setChange(false);
              setAdd(true);
            }
          }}
        />
      )}
    </div>
  );
}

export default StyledPost.withComponent(LocationModule);
