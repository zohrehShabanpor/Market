import {
  StyledShop,
  Container,
  Title,
  Container2,
  Delivery,
  NotRated,
  Category,
  Description,
  Status,
  Container4,
  RateCount,
  Shop,
  Container5,
  Button,
} from "./styles";
import { addComma, MODULES, StyledProps } from "_";
import { Rate, Profit } from "#";
import { Bookmark, BookmarkFill } from "@images";
import { theme } from "@theme";
import { useState } from "react";
import Link from "next/link";

type Props = StyledProps<{
  title: string;
  deliveryPrice: number | "رایگان";
  category: string;
  rate: number | "جدید";
  description?: string;
  status?: "بسته" | "باز";
  rateCount?: string;
  topDiscount?: string;
  hasButtons?: boolean;
  hasTopSection?: boolean;
  hasLink?: boolean;
  getActiveButton?: (data: number) => void;
}>;

function BigShopComponent({
  className,
  title,
  deliveryPrice,
  category,
  rate,
  description,
  status,
  rateCount,
  topDiscount,
  hasButtons = false,
  hasTopSection = true,
  hasLink = true,
  getActiveButton,
}: Props): React.ReactElement {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [firstButtonActive, setFirstButtonActive] = useState(true);

  return (
    <>
      {hasLink ? (
        <Link href={MODULES.find((e) => e.name === "marketStore")?.url || ""}>
          <StyledShop className={className}>
            {hasTopSection ? (
              <Container4 className="top-container">
                <Shop className="shop" />
                {isBookmarked ? (
                  <BookmarkFill
                    onClick={() => {
                      setIsBookmarked(false);
                    }}
                  />
                ) : (
                  <Bookmark
                    onClick={() => {
                      setIsBookmarked(true);
                    }}
                  />
                )}
              </Container4>
            ) : null}

            <Container className="bottom-container">
              <Container2>
                <Container2>
                  <Category>{category}</Category>
                  <Title>{title}</Title>
                  {topDiscount ? (
                    <Profit size={2}>
                      تا
                      <span>%{topDiscount}</span>
                    </Profit>
                  ) : null}
                </Container2>

                {typeof rate === "number" ? (
                  <>
                    {rateCount ? <RateCount>{rateCount}</RateCount> : null}
                    <Rate size={2} rate={rate} />
                  </>
                ) : (
                  <NotRated>{rate}</NotRated>
                )}
              </Container2>

              <Container2>
                {description ? (
                  <>
                    <Description>
                      <span></span>
                      {description}
                    </Description>
                    <Status>
                      وضعیت:
                      <span
                        style={{
                          color:
                            status === "بسته"
                              ? `${theme.palette.coralRed[90]}`
                              : `${theme.palette.paleGreen[100]}`,
                        }}
                      >
                        {status}
                      </span>
                    </Status>
                  </>
                ) : null}

                <Delivery>
                  پیک:
                  <span>
                    {deliveryPrice === "رایگان" ? (
                      <>{deliveryPrice}</>
                    ) : (
                      <>
                        {addComma(deliveryPrice)}
                        <span>تومان </span>
                      </>
                    )}
                  </span>
                </Delivery>
              </Container2>

              {hasButtons ? (
                <Container5>
                  <Button
                    onClick={() => setFirstButtonActive(true)}
                    className={firstButtonActive ? "active" : ""}
                  >
                    محصولات
                  </Button>
                  <Button
                    onClick={() => setFirstButtonActive(false)}
                    className={!firstButtonActive ? "active" : ""}
                  >
                    اطلاعات و نظرات
                  </Button>
                </Container5>
              ) : null}
            </Container>
          </StyledShop>
        </Link>
      ) : (
        <StyledShop className={className}>
          {hasTopSection ? (
            <Container4 className="top-container">
              <Shop className="shop" />
              {isBookmarked ? (
                <BookmarkFill
                  onClick={() => {
                    setIsBookmarked(false);
                  }}
                />
              ) : (
                <Bookmark
                  onClick={() => {
                    setIsBookmarked(true);
                  }}
                />
              )}
            </Container4>
          ) : null}

          <Container className="bottom-container">
            <Container2>
              <Container2>
                <Category>{category}</Category>
                <Title>{title}</Title>
                {topDiscount ? (
                  <Profit size={2}>
                    تا
                    <span>%{topDiscount}</span>
                  </Profit>
                ) : null}
              </Container2>

              {typeof rate === "number" ? (
                <>
                  {rateCount ? <RateCount>{rateCount}</RateCount> : null}
                  <Rate size={2} rate={rate} />
                </>
              ) : (
                <NotRated>{rate}</NotRated>
              )}
            </Container2>

            <Container2>
              {description ? (
                <>
                  <Description>
                    <span></span>
                    {description}
                  </Description>
                  <Status>
                    وضعیت:
                    <span
                      style={{
                        color:
                          status === "بسته"
                            ? `${theme.palette.coralRed[90]}`
                            : `${theme.palette.paleGreen[100]}`,
                      }}
                    >
                      {status}
                    </span>
                  </Status>
                </>
              ) : null}

              <Delivery>
                پیک:
                <span>
                  {deliveryPrice === "رایگان" ? (
                    <>{deliveryPrice}</>
                  ) : (
                    <>
                      {addComma(deliveryPrice)}
                      <span>تومان </span>
                    </>
                  )}
                </span>
              </Delivery>
            </Container2>

            {hasButtons ? (
              <Container5>
                <Button
                  onClick={() => {
                    setFirstButtonActive(true);
                    if (getActiveButton) getActiveButton(1);
                  }}
                  className={firstButtonActive ? "active" : ""}
                >
                  محصولات
                </Button>
                <Button
                  onClick={() => {
                    setFirstButtonActive(false);
                    if (getActiveButton) getActiveButton(2);
                  }}
                  className={!firstButtonActive ? "active" : ""}
                >
                  اطلاعات و نظرات
                </Button>
              </Container5>
            ) : null}
          </Container>
        </StyledShop>
      )}
    </>
  );
}

export default BigShopComponent;
