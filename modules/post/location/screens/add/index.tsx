import { Input } from "#";
import { Edit } from "@images";
import { theme } from "@theme";
import { StyledProps } from "_";
import { Container1, Container3, Button } from "./styles";

type Props = StyledProps<{}>;

function AddScreen({}: Props): React.ReactElement {
  return (
    <Container3>
      <Container1>
        <span className="title1">
          <Edit />
          افزودن آدرس جدید
        </span>

        <span className="title2">عنوان آدرس جدید</span>
        <Input props={{ placeholder: "خانه، شرکت، مغازه، نانوایی و ..." }} />
        <span className="title2">آدرس دقیق برای مسیریابی پیک</span>
        <Input props={{ placeholder: "خانه، شرکت، مغازه، نانوایی و ..." }} />

        <Button href="/post" backColor={theme.palette.blueDeFrance[90]}>
          اضافه کردن آدرس جدید
        </Button>
      </Container1>
    </Container3>
  );
}

export default AddScreen;
