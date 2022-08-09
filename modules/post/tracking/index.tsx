import { Avatar, SourceDestination } from "#";
import { Edit, Flag, Telephone } from "@images";
import { theme } from "@theme";
import { addComma, StyledProps } from "_";
import {
  StyledPost,
  Container1,
  Container2,
  Container3,
  Button,
  Container4,
  Container5,
  Container6,
  Container7,
} from "./styles";

type Props = StyledProps<{}>;

function TrackingModule({ className }: Props): React.ReactElement {
  return (
    <div className={className}>
      <Container3>
        <Container1>
          <Container4>
            <Avatar />
            <Container5>
              <span className="title">حسین فلاح بجنوردی</span>
              <span className="description">تا 5 دقیقه دیگه میرسم</span>
            </Container5>
            <Container6>
              <span>
                529
                <Flag />
              </span>
              <span>43173</span>
            </Container6>
          </Container4>
          <Container2>
            <Button
              Icon={<Telephone />}
              backColor={theme.palette.blueDeFrance[90]}
              outline={true}
            >
              تماس با پیک
            </Button>
            <Button
              href="/post/delivery"
              backColor={theme.palette.sunRay[100]}
              Icon={<Edit />}
              iconBackground={false}
            >
              جزئیات سفارش
            </Button>
            <Button backColor={theme.palette.paleGreen[80]}>
              پرداخت {addComma(10000)} تومان
            </Button>
            <Button backColor={theme.palette.coralRed[100]} outline={true}>
              کد تخفیف
            </Button>
          </Container2>

          <Container7>
            <SourceDestination hasCaption={true} />
            <Button
              href="/post/canceling"
              backColor={theme.palette.coralRed[90]}
              outline={true}
            >
              لغو کردن
            </Button>
          </Container7>
        </Container1>
      </Container3>
    </div>
  );
}

export default StyledPost.withComponent(TrackingModule);
