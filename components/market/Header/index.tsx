import { MODULES, StyledProps } from "_";
import { Offcanvas, RoundStar } from "#";
import { Star, Plus } from "@images";
import {
  Container,
  ShoppingCardContainer,
  Notification,
  ShoppingCard,
  LocationTitleContainer,
  CheckHandle,
  LocationTitle,
  Arrow,
  Container1,
  Container3,
  Container4,
  Title,
  Input,
  ChangeButton,
  Container2,
  Button,
} from "./styles";
import Link from "next/link";
import { theme } from "@theme";

type Props = StyledProps<{}>;

function HeaderComponent({}: Props): React.ReactElement {
  return (
    <Container>
      <Link href={MODULES.find((e) => e.name === "marketCart")?.url || ""}>
        <ShoppingCardContainer>
          <Notification value="2" />
          <ShoppingCard />
        </ShoppingCardContainer>
      </Link>
      <LocationTitleContainer
        data-bs-toggle="offcanvas"
        data-bs-target="#locationOffcanvas"
        aria-controls="locationOffcanvas"
      >
        <CheckHandle />
        <LocationTitle>
          قبل از شروع خرید مقصد مورد نظر را انتخاب کنید
        </LocationTitle>
        <Arrow />
      </LocationTitleContainer>
      <Offcanvas
        title={
          <>
            <RoundStar />
            آدرس مقصد
          </>
        }
        size={2}
        id="locationOffcanvas"
      >
        <Container1>
          <Container4>
            <Title>
              <Star />
              نقطه دیزاین
            </Title>
            <Container3>
              <Input props={{ placeholder: "بابل، کمربندی غربی" }} />
              <ChangeButton />
            </Container3>
          </Container4>
          <Container4>
            <Title>
              <Star />
              خانه
            </Title>
            <Container3>
              <Input props={{ placeholder: "بابل، کمربندی غربی" }} />
              <ChangeButton />
            </Container3>
          </Container4>
        </Container1>
        <Container2>
          <Button backColor={theme.palette.paleGreen[100]}>
            انتخاب از روی نقشه
          </Button>
          <Button backColor={theme.palette.blueDeFrance[100]} Icon={<Plus />}>
            افزودن آدرس جدید
          </Button>
        </Container2>
      </Offcanvas>
    </Container>
  );
}

export default HeaderComponent;
