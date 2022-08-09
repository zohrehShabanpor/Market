import { Input } from "#";
import { Edit } from "@images";
import { theme } from "@theme";
import { StyledProps } from "_";
import { Container1, Container3, Button } from "./styles";

type Props = StyledProps<{ onSubmit: () => void }>;

function EditScreen({ onSubmit }: Props): React.ReactElement {
  return (
    <Container3>
      <Container1>
        <span className="title1">
          <Edit />
          تغییر جزئیات آدرس
        </span>

        <span className="title2">عنوان آدرس جدید</span>
        <Input props={{ placeholder: "خانه، شرکت، مغازه، نانوایی و ..." }} />
        <span className="title2">آدرس دقیق برای مسیریابی پیک</span>
        <Input props={{ placeholder: "خانه، شرکت، مغازه، نانوایی و ..." }} />

        <Button
          onClick={() => onSubmit()}
          backColor={theme.palette.blueDeFrance[90]}
        >
          تغییر آدرس منتخب
        </Button>
      </Container1>
    </Container3>
  );
}

export default EditScreen;
