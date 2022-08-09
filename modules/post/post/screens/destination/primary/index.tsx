import { Plus, Star } from "@images";
import { useStore } from "@store";
import { theme } from "@theme";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { MODULES, StyledProps } from "_";
import {
  StyledPost,
  Container1,
  Container2,
  Container3,
  Button,
  IconButton,
} from "./styles";

type Props = StyledProps<{ onSubmit: () => void }>;

function PostModule({ className, onSubmit }: Props): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "postDestinationPrimary");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return (
    <Container3>
      <Container2>
        <IconButton backColor={theme.palette.blueDeFrance[90]}>
          <div></div>
        </IconButton>
        <IconButton Icon={<Star />} backColor={theme.palette.sunRay[100]}>
          نقطه دیزاین
        </IconButton>
        <IconButton Icon={<Star />} backColor={theme.palette.sunRay[100]}>
          خانه
        </IconButton>
        <IconButton
          href="/post/location"
          Icon={<Plus />}
          backColor={theme.palette.sunRay[100]}
        ></IconButton>
      </Container2>

      <Container1>
        <span>مقصد</span>
        <span>
          <span></span>
          بابل، توحید 7
        </span>
        <Button
          onClick={() => onSubmit()}
          backColor={theme.palette.blueDeFrance[90]}
        >
          تایید مقصد
        </Button>
      </Container1>
    </Container3>
  );
}

export default observer(PostModule);
