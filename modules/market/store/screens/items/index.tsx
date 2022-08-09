import { MODULES } from "_";
import { Product } from "#";
import {
  ProductContainer,
  CategoryHeader,
  CategoryContainer,
  Button,
} from "./styles";
import { Arrow, Calender2, Categories } from "@images";
import { OptionsList, Offcanvas } from "#";
import { theme } from "@theme";
import { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";

function ItemsScreen(): React.ReactElement {
  let url = MODULES.find((e) => e.name === "marketAllProducts")?.url || "";

  const FILTER_ITEMS = [
    { text: "پیتزا", value: 1 },
    { text: "همبرگر", value: 2 },
    { text: "استیک", value: 3 },
    { text: "سوخاری", value: 4 },
    { text: "پاستا", value: 5 },
    { text: "ساندویچ", value: 6 },
    { text: "سالاد", value: 7 },
    { text: "نوشیدنی", value: 8 },
  ];

  return (
    <>
      {FILTER_ITEMS.map((item, index) => {
        const ref = useRef(null);

        return (
          <div key={index}>
            <CategoryHeader
              title={item.text}
              link={{
                title: "بیشتر",
                href: url,
              }}
            >
              {index === 0 ? (
                <CategoryContainer
                  data-bs-toggle="offcanvas"
                  data-bs-target="#filterOffcanvas"
                  aria-controls="filterOffcanvas"
                >
                  <Categories />
                  غرفه ها
                  <Arrow className="arrow" />
                </CategoryContainer>
              ) : null}
            </CategoryHeader>

            <ProductContainer
              ref={ref}
              onMouseDown={useDraggableScroll(ref).onMouseDown}
            >
              {[...Array(10)].map((_, index2) => (
                <Product
                  key={index2}
                  title="پیتزا رست بیف"
                  discount="15"
                  offPrice="102000"
                  originalPrice="120000"
                />
              ))}
            </ProductContainer>
          </div>
        );
      })}

      <Offcanvas
        id="filterOffcanvas"
        size={3}
        title={
          <>
            <Calender2 />
            غرفه ها
          </>
        }
      >
        <OptionsList
          getData={(data) => {}}
          hasTags={true}
          multiSelect={true}
          items={FILTER_ITEMS}
        />

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
