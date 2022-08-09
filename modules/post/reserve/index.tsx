import { Calender2 } from "@images";
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

function ReserveModule({ className }: Props): React.ReactElement {
  return (
    <div className={className}>
      <Container3>
        <Container1>
          <Container2>
            <span>
              <Calender2 />
              رزور درخواست
            </span>
          </Container2>
          <Calender />

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
            رزرو درخواست
          </Button>
        </Container1>
      </Container3>
    </div>
  );
}

export default StyledPost.withComponent(ReserveModule);
