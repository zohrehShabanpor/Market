import { StyledProps } from "_";
import {
  StyledSignUp,
  Button,
  Version,
  Logo,
  Input,
  Container,
  DashedInput,
} from "./styles";
import { Select } from "#";
import { Arrow } from "@images";
import { theme } from "@theme";
import { useState } from "react";
import { URL } from "url";

type Props = StyledProps<{}>;

function SignUpModule({ className }: Props): React.ReactElement {
  const [image, setImage] = useState<string>();

  const handleImage = (event: any) => {
    let files = event.target.files;

    setImage(URL?.createObjectURL(files[0]));
  };

  return (
    <div className={className}>
      <Logo getImage={handleImage} hasFileExplore={true} imageUrl={image} />
      <Input label="نام" hasStar={true} />
      <Input label="نام خانوادگی" hasStar={true} />
      <Container>
        <Input label="استان" />
        <Input label="شهر" />
      </Container>
      <Container>
        <DashedInput length={6} label="تاریخ تولد" />
        <Select label="جنسیت">
          <option>خانم</option>
          <option>آقا</option>
        </Select>
      </Container>
      <Input label="ایمیل" />
      <Input
        props={{
          value: "09113181910",
          readOnly: true,
          style: { textAlign: `center`, letterSpacing: `10px` },
        }}
        label="شماره تلفن همراه"
        hasStar={true}
      />
      <Button
        href="/home"
        backColor={theme.palette.blueDeFrance[100]}
        Icon={<Arrow />}
      >
        رفتن به برنامه
      </Button>
      <Version />
    </div>
  );
}

export default StyledSignUp.withComponent(SignUpModule);
