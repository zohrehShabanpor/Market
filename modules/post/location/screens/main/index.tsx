import { ChangeButton, Input } from "#";
import { Plus, Star } from "@images";
import { theme } from "@theme";
import { StyledProps } from "_";
import { Container1, Container2, Container3, Button } from "./styles";

type Props = StyledProps<{ onSubmit: (data: number) => void }>;

function MainScreen({ onSubmit }: Props): React.ReactElement {
  return (
    <Container3>
      <Container1>
        <span className="title1">
          <Star />
          آدرس های منتخب
        </span>

        <Container2>
          <span className="title2">
            <Star />
            <span>نقطه دیزاین</span>
          </span>
          <Input props={{ placeholder: "بابل، کمربندی غربی" }} />
          <ChangeButton
            onClick={() => {
              onSubmit(1);
            }}
            className="change-button"
          />
        </Container2>
        <Container2>
          <span className="title2">
            <Star />
            <span>خانه</span>
          </span>
          <Input props={{ placeholder: "بابل، کمربندی غربی" }} />
          <ChangeButton
            onClick={() => {
              onSubmit(1);
            }}
            className="change-button"
          />
        </Container2>

        <Button
          onClick={() => {
            onSubmit(2);
          }}
          Icon={<Plus />}
          iconBackground={false}
          backColor={theme.palette.blueDeFrance[90]}
        >
          افزودن آدرس منتخب
        </Button>
      </Container1>
    </Container3>
  );
}

export default MainScreen;
