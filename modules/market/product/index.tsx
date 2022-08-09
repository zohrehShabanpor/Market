import { addComma, StyledProps } from "_";
import { Pagination, Profit, Rate, Comment as CommentComponent } from "#";
import {
  Content,
  StyledMarket,
  ShopItem,
  Banner,
  Bookmark,
  BookmarkFill,
  Container1,
  Container2,
  Container3,
  Container4,
  ProductTitle,
  ProductDescription,
  Container5,
  Container6,
  Container7,
  Container8,
  Container14,
  Button,
  Container15,
  Container16,
  Container17,
} from "./styles";
import { useState } from "react";
import { Arrow, Comment } from "@images";
import { theme } from "@theme";
import { ShopButton, Offcanvas, OptionsList } from "#";

type Props = StyledProps<{}>;

function ProductModule({ className }: Props): React.ReactElement {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const SORT_ITEMS = [
    { text: "بیشترین امتیاز", value: 1 },
    { text: "کمترین امتیاز", value: 2 },
    { text: "بر اساس تاریخ", value: 3 },
  ];

  return (
    <div className={className}>
      <ShopItem
        rateCount="150"
        title="راح فود"
        category="فست فود"
        rate={4.5}
        deliveryPrice="رایگان"
        description="پیتزا، برگر، ساندویچ، سالاد، پیش غذا"
        status="بسته"
        topDiscount="15"
        hasTopSection={false}
        hasLink={false}
      />
      <Content>
        <Banner>
          {isBookmarked ? (
            <BookmarkFill onClick={() => setIsBookmarked(false)} />
          ) : (
            <Bookmark onClick={() => setIsBookmarked(true)} />
          )}

          <Pagination background="#F2F2F2" />
        </Banner>
        <Container1>
          <Container4>
            <ProductTitle>پیتزا رست بیف</ProductTitle>
            <Container2>
              <span className="comment-count">12نظر</span>
              <Container3>
                150
                <Rate size={2} rate={4.5} />
              </Container3>
            </Container2>
          </Container4>
          <ProductDescription>
            خمیر پیتزای ایتالیایی 34 سانتی متری، گوشت گوساله ریش ریش شده، فلفل
            دلمه ای، قارچ، زیتون، پنیر پیتزا
          </ProductDescription>
        </Container1>
        <Container5>
          <Container6>
            <Container7>
              <Comment />
              نظرات کاربران
            </Container7>
            <Container8
              data-bs-toggle="offcanvas"
              data-bs-target="#optionsOffcanvas"
              aria-controls="optionsOffcanvas"
            >
              مرتب سازی
              <Arrow />
            </Container8>
          </Container6>

          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
        </Container5>
      </Content>
      <Container14>
        <ShopButton type={2} />
        <Container15>
          <Container16>
            <Profit>
              <span>%15</span>
            </Profit>
            <div className="price">{addComma(120000)}</div>
          </Container16>
          <Container17>
            {addComma(102000)}
            <span>تومان</span>
          </Container17>
        </Container15>
      </Container14>
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
    </div>
  );
}

export default StyledMarket.withComponent(ProductModule);
