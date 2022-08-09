import {
  StyledItem,
  Container,
  Title,
  ImageContainer,
  Image,
  InfoContainer,
  DiscountContainer,
  PriceContainer,
  Price,
  ButtonsContainer,
  ShopButton,
  ButtonMojudi,
  ButtonSearch,
  Button2,
  Warn,
} from "./styles";
import { addComma, StyledProps } from "_";
import { Profit } from "#";
import { Bell, Search } from "@images";
import { useEffect, useState } from "react";
import { theme } from "@theme";

type Props = StyledProps<{
  title?: string;
  discount?: string;
  originalPrice?: string;
  finalPrice?: string;
  count?: number;
  warn?: string;
}>;

function ItemComponent({
  className,
  title,
  discount,
  originalPrice,
  finalPrice,
  count,
  warn,
}: Props): React.ReactElement {
  const [isDeleted, setIsDeleted] = useState(false);
  const [exists, setExists] = useState(true);

  useEffect(() => {
    if (!count || count === 0) setExists(false);
  }, [count]);

  return (
    <div
      style={{ display: isDeleted ? `none` : undefined }}
      className={className}
    >
      <ImageContainer>
        <Image alt="" />
      </ImageContainer>

      <Container>
        <InfoContainer>
          <Title>{title}</Title>
          <DiscountContainer>
            {!exists ? (
              <Button2>اتمام موجودی</Button2>
            ) : (
              <>
                <Profit>
                  <span>%{discount}</span>
                </Profit>
                <span className="price">
                  {originalPrice ? addComma(originalPrice) : null}
                </span>
              </>
            )}
          </DiscountContainer>
          <PriceContainer>
            {!exists ? (
              <Warn>این سفارش به صورت خودکار از باکس خرید شما حذف میگردد</Warn>
            ) : (
              <>
                <span>
                  <Price>{finalPrice ? addComma(finalPrice) : null}</Price>
                  <span>تومان</span>
                </span>
                {warn ? <Warn>{warn}</Warn> : null}
              </>
            )}
          </PriceContainer>
        </InfoContainer>

        <ButtonsContainer
          style={
            !exists
              ? {
                  justifyContent: `space-between`,
                  height: `100%`,
                }
              : {
                  justifyContent: `end`,
                  height: `fit-content`,
                  position: `absolute`,
                  left: `0`,
                }
          }
        >
          {!exists ? (
            <>
              <ButtonMojudi Icon={<Bell />}>اطلاع موجودی</ButtonMojudi>
              <ButtonSearch
                outline={true}
                backColor={theme.palette.paleGreen[100]}
                Icon={<Search />}
              >
                کالاهای مشابه
              </ButtonSearch>
            </>
          ) : (
            <ShopButton
              isDeleted={(data) => {
                setIsDeleted(data);
              }}
              value={count}
            />
          )}
        </ButtonsContainer>
      </Container>
    </div>
  );
}

export default StyledItem.withComponent(ItemComponent);
