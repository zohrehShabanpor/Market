import { MODULES, StyledProps } from "_";
import {
  StyledAuth,
  Logo,
  Motto,
  Button,
  ButtonContainer,
  Version,
} from "./styles";
import { logo } from "@images";

type Props = StyledProps<{}>;

function AuthModule({ className }: Props): React.ReactElement {
  return (
    <div className={className}>
      <Logo imageUrl={logo.src} />
      <Motto>
        بدون{" "}
        <span>
          اعتماد
          <span>؛</span>
        </span>
        زندگی سخته ...
      </Motto>
      <ButtonContainer>
        <Button href="/home">ورود به حساب کاربری</Button>
        <Button href={MODULES.find((e) => e.name === "authVerify")?.url || ""}>
          کاربر جدید
        </Button>
      </ButtonContainer>
      <Version />
    </div>
  );
}

export default StyledAuth.withComponent(AuthModule);
