import { theme } from "@theme";
import { StyledProps } from "_";
import {
  StyledPost,
  Container1,
  Container2,
  Container3,
  Button,
  Button2,
  Input,
} from "./styles";

type Props = StyledProps<{}>;

function DiscountModule({ className }: Props): React.ReactElement {
  return (
    <div className={className}>
      <Container3>
        <Container1>
          <div className="title">کد تخفیف!</div>
          <Container2>
            <Button2 backColor={theme.palette.blueDeFrance[90]}>
              کد تخفیف
            </Button2>
            <Input props={{ placeholder: "کد تخفیف را اینجا وارد کنید" }} />
          </Container2>

          <Button href="/post/delivery" backColor={theme.palette.paleGreen[80]}>
            اعمال کد تخفیف
          </Button>
        </Container1>
      </Container3>
    </div>
  );
}

export default StyledPost.withComponent(DiscountModule);
