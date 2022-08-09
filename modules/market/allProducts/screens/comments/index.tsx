import {
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Container7,
  Container8,
  Container9,
  Container10,
  Container11,
  Container16,
  Button,
} from "./styles";
import { Arrow, Clock, Comment } from "@images";
import { Comment as CommentComponent, Rate, Week } from "#/market";
import { Offcanvas, OptionsList } from "#";
import { theme } from "@theme";

function CommentsScreen(): React.ReactElement {
  const ITEMS = [
    { percent: 57 },
    { percent: 21 },
    { percent: 11 },
    { percent: 3 },
    { percent: 8 },
  ];

  const SORT_ITEMS = [
    { text: "بیشترین امتیاز", value: 1 },
    { text: "کمترین امتیاز", value: 2 },
    { text: "بر اساس تاریخ", value: 3 },
  ];

  return (
    <>
      <Container1>
        <Container3>
          <div>4,1</div>
          <span>12 نظر و 120 امتیاز</span>
        </Container3>
        <Container2>
          {ITEMS.map((item, index) => {
            return (
              <Container4
                key={index}
                style={{ opacity: `calc(100% - (${index} * 18%))` }}
              >
                <span className="percent">
                  <span>{item.percent}</span>
                  <div>%</div>
                </span>
                <Container5 percent={item.percent}>
                  <div></div>
                </Container5>
                <Rate rate={5 - index} size={2} />
              </Container4>
            );
          })}
        </Container2>
      </Container1>
      <Container6>
        <Container7>
          <span>میدان جهاد(اوقاف)، جنب اندیشه 23، پلاک 2</span>
          <span>حداقل سبد خرید: 50,000 تومان</span>
          <span>روش پرداخت: آنلاین</span>
        </Container7>
        <Container8></Container8>
      </Container6>
      <Week
        title1={
          <>
            <Clock />
            وضعیت:
            <span>باز</span>
          </>
        }
        title2={
          <>
            ساعت کاری امروز:
            <span>از ساعت 11 الی 00:30</span>
          </>
        }
      />

      <Container16>
        <Container9 className="header">
          <Container10>
            <Comment />
            نظرات کاربران
          </Container10>
          <Container11
            data-bs-toggle="offcanvas"
            data-bs-target="#optionsOffcanvas"
            aria-controls="optionsOffcanvas"
          >
            <span>مرتب سازی</span>
            <Arrow className="p-1" />
          </Container11>
        </Container9>
        <CommentComponent />
        <CommentComponent />
        <CommentComponent />
        <CommentComponent />
        <CommentComponent />
      </Container16>

      <Offcanvas
        id="optionsOffcanvas"
        title={
          <>
            <Comment />
            مرتب سازی نظرات
          </>
        }
      >
        <OptionsList items={SORT_ITEMS} />

        <Button
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          backColor={`${theme.palette.paleGreen[100]}`}
        >
          مرتب سازی
        </Button>
      </Offcanvas>
    </>
  );
}

export default CommentsScreen;
