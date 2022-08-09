import { useMemo, useRef, useState } from "react";
import { DashedInput } from "#";
import { MODULES, StyledProps } from "_";
import { Arrow } from "@images";
import {
  StyledVerify,
  Input,
  Wrapper,
  Button,
  Button2,
  Version,
} from "./styles";
import { theme } from "@theme";

type Props = StyledProps<{}>;

function VerifyModule({ className }: Props): React.ReactElement {
  const [mobile, setMobile] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const createDash = (count: number) => {
    if (count < 1) return "";
    let output = "";
    [...Array(count)].map(() => (output += "_"));

    return output;
  };

  const ref = useRef<HTMLInputElement>(null);

  useMemo(() => {
    setTimeout(() => {
      if (mobile.length === 0) ref?.current?.setSelectionRange(2, 2);
      else
        ref?.current?.setSelectionRange(mobile.length + 2, mobile.length + 2);
    }, 10);
  }, [mobile]);

  return (
    <div className={className}>
      <div className="w-100">
        <DashedInput
          className="first-input"
          staticNumbers="09"
          length={11}
          label="شماره تلفن همراه را وارد کنید"
          getValue={(value) => setMobile(value)}
        />
        <Wrapper>
          درخواست کد تایید
          <Button>2:00</Button>
        </Wrapper>
      </div>

      <DashedInput
        length={5}
        label="کد تایید را وارد کنید"
        getValue={(value) => setCode(value)}
      />

      <Button2
        href={MODULES.find((e) => e.name === "authSignUp")?.url || ""}
        backColor={theme.palette.blueDeFrance[100]}
        Icon={<Arrow />}
      >
        ورود به حساب کاربری
      </Button2>
      <Version />
    </div>
  );
}

export default StyledVerify.withComponent(VerifyModule);
