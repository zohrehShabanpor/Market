import { Offcanvas, OptionsList, Product } from "#";
import {
  CategoryHeader,
  ProductContainer,
  CategoryContainer,
  Container,
  Button,
} from "./styles";
import { Arrow, Sort2 } from "@images";
import { theme } from "@theme";

function ItemsScreen(): React.ReactElement {
  const SORT_ITEMS = [
    { text: "پرفروش ترین", value: 1 },
    { text: "بیشترین امتاز", value: 2 },
    { text: "نزدیک ترین", value: 3 },
    { text: "گران ترین", value: 4 },
    { text: "ارزان ترین", value: 5 },
    { text: "بیشترین تخفیف", value: 6 },
    { text: "جدیدترین", value: 7 },
  ];

  return (
    <>
      <CategoryHeader title="پیتزا">
        <CategoryContainer
          data-bs-toggle="offcanvas"
          data-bs-target="#sortOffcanvas"
          aria-controls="sortOffcanvas"
        >
          <Sort2 />
          بشترین امتیاز
          <Arrow className="arrow" />
        </CategoryContainer>
      </CategoryHeader>
      <ProductContainer className="row">
        {[...Array(11)].map((_, index) => {
          return (
            <Container key={index} className="col-3">
              <Product
                title="پیتزا رست بیف"
                discount="15"
                offPrice="102000"
                originalPrice="120000"
              />
            </Container>
          );
        })}
      </ProductContainer>

      <Offcanvas
        id="sortOffcanvas"
        size={2}
        title={
          <>
            <Sort2 />
            مرتب سازی
          </>
        }
      >
        <OptionsList getData={(data) => {}} items={SORT_ITEMS} />

        <Button
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          backColor={`${theme.palette.paleGreen[100]}`}
        >
          فیلتر کردن
        </Button>
      </Offcanvas>
    </>
  );
}

export default ItemsScreen;
