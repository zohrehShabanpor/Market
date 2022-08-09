import {
  Container,
  Container2,
  Container3,
  ImageContainer,
  Text1,
  Text2,
  Text3,
  Discount,
  ShopButton,
} from "./styles";
import { MODULES, StyledProps } from "_";
import Link from "next/link";
import { pizza } from "@images";

type Props = StyledProps<{
  title?: string;
  discount?: string;
  offPrice?: string;
  originalPrice?: string;
}>;

function ProductComponent({
  title,
  discount,
  offPrice,
  originalPrice,
  className,
}: Props): React.ReactElement {
  return (
    <Container className={className}>
      <ShopButton />
      <Link
        href={MODULES.find((e) => e.name === "marketProduct")?.url || ""}
        passHref
      >
        <a>
          <ImageContainer>
            <img src={pizza.src} />
          </ImageContainer>
          <Container2>
            <Text1>{title}</Text1>
            {discount ? (
              <Container3>
                <Discount>%{discount}</Discount>
                <Text2>{originalPrice}</Text2>
              </Container3>
            ) : null}

            <Text3>
              {originalPrice}
              <span>تومان</span>
            </Text3>
          </Container2>
        </a>
      </Link>
    </Container>
  );
}

export default ProductComponent;
