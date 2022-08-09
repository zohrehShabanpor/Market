import { OptionsList } from "#";
import { Close3 } from "@images";
import { theme } from "@theme";
import { StyledProps } from "_";
import { StyledPost, Container1, Container3, Button, TextArea } from "./styles";

type Props = StyledProps<{}>;

function CancelingModule({ className }: Props): React.ReactElement {
  return (
    <div className={className}>
      <Container3>
        <Container1>
          <span className="title">
            <Close3 />
            لغو درخواست پیک
          </span>
          <OptionsList
            color={theme.palette.coralRed[90]}
            items={[
              { text: "پیک دور است", value: 1 },
              { text: "پیک درخواست کرده است", value: 2 },
              { text: "پیک پاسخگو نبود", value: 3 },
              { text: "دلایل دیگر", value: 4 },
            ]}
          />
          <TextArea
            props={{
              placeholder:
                "در صورت صلاح دید دلیل لغو درخواست خود را اینجا بنویسید",
            }}
          />
          <Button
            href="/post/tracking"
            backColor={theme.palette.coralRed[90]}
            outline={true}
          >
            لغو کردن
          </Button>
        </Container1>
      </Container3>
    </div>
  );
}

export default StyledPost.withComponent(CancelingModule);
