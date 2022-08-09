import { Calender2, Check3 } from "@images";
import { theme } from "@theme";
import { StyledProps } from "_";
import { Calender } from "#";
import {
  StyledPost,
  Container1,
  Container2,
  Container3,
  Button,
} from "./styles";

type Props = StyledProps<{}>;

function DelayModule({ className }: Props): React.ReactElement {
  return (
    <div className={className}>
      <Container3>
        <Container1>
          <Container2>
            <span>
              <Check3 />
              توقف در محل
            </span>
          </Container2>

          <Calender justMinute={true} />

          <Button
            href="/post/delivery"
            backColor={theme.palette.sunRay[100]}
            style={{
              width: `100%`,
              justifyContent: `center`,
              fontSize: `16px`,
              height: `38px`,
              marginTop: `50px`,
            }}
          >
            اعمال تغییرات
          </Button>
        </Container1>
      </Container3>
    </div>
  );
}

export default StyledPost.withComponent(DelayModule);
