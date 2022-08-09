import { Container3, Container2 } from "./styles";
import { addComma, StyledProps } from "_";
import { Dollar } from "@images";

type Props = StyledProps<{
  price?: string;
  profit?: string;
}>;

function FinalPriceComponent({ price, profit }: Props): React.ReactElement {
  return (
    <Container2>
      <Container3>
        {price ? <span className="title">{addComma(price)}</span> : null}
        {profit ? (
          <span className="description">{profit} تومان سود خرید</span>
        ) : null}
      </Container3>
      <Dollar />
    </Container2>
  );
}

export default FinalPriceComponent;
