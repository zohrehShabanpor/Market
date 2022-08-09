import { StyledProps, uuid } from "_";
import { Rate } from "#";
import {
  Container9,
  Container10,
  Container11,
  Container12,
  Container13,
  Container14,
  ProductTitle,
  Tag,
  TextArea,
} from "./styles";
import { useMemo } from "react";

type Props = StyledProps<{}>;

function CommentComponent({}: Props): React.ReactElement {
  const id = useMemo(() => "comment" + String(uuid()), []);

  return (
    <>
      <Container12
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded="false"
        aria-controls={`${id}`}
      >
        <Container9>
          <ProductTitle>مریم</ProductTitle>
          <Container10>
            11 فروردین 1401
            <Rate size={2} rate={2} />
          </Container10>
        </Container9>
        <Container13>
          غذا خیلی زود به دستم رسید و پیکش خیلی خوش برخورد بود.
        </Container13>
        <Container11>
          <Tag>پیترا رست بیف</Tag>
          <Tag>زینگر</Tag>
          <Tag>نوشابه قوطی پپسی</Tag>
        </Container11>
      </Container12>
      <Container14 className="collapse" id={id}>
        <TextArea placeholder="پاسخ اعتماد مارکت" />
        <TextArea placeholder="پاسخ مدیر فروشگاه" />
      </Container14>
    </>
  );
}

export default CommentComponent;
