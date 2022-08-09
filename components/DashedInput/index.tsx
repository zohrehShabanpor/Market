import { StyledInput, Input, Container, Label } from "./styles";
import { StyledProps } from "_";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, {
  createRef,
  InputHTMLAttributes,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { theme } from "@theme";
import { stringify } from "querystring";

type Props = StyledProps<{
  props?: InputHTMLAttributes<HTMLInputElement>;
  label?: string | React.ReactElement;
  style?: any;
  hasStar?: boolean;
  length?: number;
  staticNumbers?: string;
  getValue?: (value: string) => void;
}>;

function DashedInputComponent({
  props,
  label,
  style,
  hasStar,
  className,
  length = 4,
  staticNumbers,
  getValue,
}: Props): React.ReactElement {
  const [num, setNum] = useState<Array<string>>([]);
  const [refs, setRefs] = useState<Array<RefObject<HTMLInputElement>>>([]);

  useEffect(() => {
    let data: Array<string> = [];
    [...Array(length)].map((_, index) => {
      if (staticNumbers && index < staticNumbers.length)
        data.push(staticNumbers[index]);
      else data.push("");
    });

    setNum(data);
    setRefs([...Array(length)].map(() => createRef()));
  }, []);

  useMemo(() => {
    let value = "";

    num.map((item) => (value += item));

    if (getValue) getValue(value);
  }, [num]);

  return (
    <div style={style} className={className}>
      {label ? (
        <Label>
          {label} {hasStar ? <span className="star">*</span> : null}
        </Label>
      ) : null}

      <Container
        dir="ltr"
        readOnly={props?.readOnly || false}
        required={hasStar || false}
        className="input-container"
      >
        {[...Array(length)].map((_, index) => {
          return (
            <>
              {staticNumbers && index < staticNumbers?.length ? (
                <Input
                  key={index}
                  value={staticNumbers[index]}
                  readOnly={true}
                  style={{
                    userSelect: `none`,
                    width: `16px`,
                    marginRight:
                      index === staticNumbers.length - 1 ? `10px` : ``,
                  }}
                />
              ) : (
                <Input
                  ref={refs[index]}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Backspace" &&
                      !refs[index].current?.value &&
                      refs[index - 1]?.current
                    ) {
                      refs[index - 1].current?.focus();
                    }
                  }}
                  onKeyUp={() => {
                    if (refs[index].current?.value && refs[index + 1]?.current)
                      refs[index + 1].current?.focus();
                  }}
                  key={index}
                  value={num[index] || ""}
                  onChange={(event) => {
                    setNum(
                      num.map((item, index2) =>
                        index === index2 ? event.target.value : item
                      )
                    );
                  }}
                  style={{
                    borderBottomWidth: num[index] ? `0` : `2.5px`,
                  }}
                  maxLength={1}
                />
              )}
            </>
          );
        })}
      </Container>
    </div>
  );
}

export default StyledInput.withComponent(DashedInputComponent);
