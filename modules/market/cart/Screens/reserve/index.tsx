import { MODULES, StyledProps } from "_";
import { Main, Container, Button } from "./styles";
import { Order } from "#";
import { theme } from "@theme";
import { Clock, Telephone } from "@images";

type Props = StyledProps<{}>;

function ReserveScreen({ className }: Props): React.ReactElement {
  return (
    <div className={className}>
      {[0, 1, 2].map((_, index) => {
        return (
          <Order key={index} Icon={<Clock />} status="reserved">
            <Container>
              <Button
                href={
                  MODULES.find((e) => e.name === "marketCartDetails")?.url || ""
                }
                backColor={theme.palette.paleGreen[100]}
              >
                مشاهده جزئیات
              </Button>
              <Button
                backColor={theme.palette.blueDeFrance[100]}
                outline={true}
                Icon={<Telephone />}
              >
                تماس با پشتیبانی
              </Button>
            </Container>
          </Order>
        );
      })}
    </div>
  );
}

export default Main.withComponent(ReserveScreen);
