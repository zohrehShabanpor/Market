import { Plus, Star, User } from "@images";
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
  Input,
  TextArea,
} from "./styles";

type Props = StyledProps<{ onSubmit: () => void }>;

function PostModule({ onSubmit }: Props): React.ReactElement {
  const globalStore = useStore();

  useEffect(() => {
    let item = MODULES.find((e) => e.name === "postSourceSecondary");

    if (item) globalStore.setModule(item);
  }, [globalStore]);

  return (
    <Container3>
      <Container1>
        <span>مبدا</span>
        <span>
          <span></span>
          بابل، توحید 7
        </span>
        <span>فرستنده</span>
        <Container2>
          <Input props={{ placeholder: "نام و نام خانوادگی" }} />
          <Input props={{ placeholder: "تلفن" }} Icon={<User />} />
          <Input props={{ placeholder: "پلاک" }} />
          <Input props={{ placeholder: "واحد" }} />
          <TextArea
            props={{ placeholder: "توضیحات «برای راهنمایی بهتر پیک»" }}
          />
          <span>تصاویر جهت ضمیمه</span>
          <div className="plus-item">
            <Plus />
          </div>
          <div className="plus-item">
            <Plus />
          </div>
          <div className="plus-item">
            <Plus />
          </div>
          <div className="plus-item">
            <Plus />
          </div>
        </Container2>
        <Button
          onClick={() => onSubmit()}
          backColor={theme.palette.blueDeFrance[90]}
        >
          تایید جزئیات مبدا
        </Button>
      </Container1>
    </Container3>
  );
}

export default observer(PostModule);
