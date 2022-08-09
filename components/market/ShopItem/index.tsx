import {
  StyledShop,
  Container,
  Title,
  Container2,
  Delivery,
  NotRated,
  Category,
} from "./styles";
import { addComma, MODULES, StyledProps } from "_";
import { Rate } from "#";
import Link from "next/link";

type Props = StyledProps<{
  title: string;
  deliveryPrice: number | "رایگان";
  category: string;
  rate: number | "جدید";
}>;

function ShopItemComponent({
  className,
  title,
  deliveryPrice,
  category,
  rate,
}: Props): React.ReactElement {
  return (
    <Link href={MODULES.find((e) => e.name === "marketStore")?.url || ""}>
      <StyledShop className={className}>
        <Container className="bottom-container">
          <Container2>
            <Category>{category}</Category>

            {typeof rate === "number" ? (
              <Rate rate={rate} />
            ) : (
              <NotRated>{rate}</NotRated>
            )}
          </Container2>

          <Container2>
            <Title>{title}</Title>

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
        </Container>
      </StyledShop>
    </Link>
  );
}

export default ShopItemComponent;
