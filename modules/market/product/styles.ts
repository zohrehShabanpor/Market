import { Button as button } from "#";
import { BigShopItem as shopItem } from "#";
import styled from "@emotion/styled";
import { Bookmark as bookmark, BookmarkFill as bookmarkFill } from "@images";
import { theme } from "@theme";

export const Content = styled.div`
  padding: 0 15px 15px;
  height: 100vh;
  overflow-y: scroll;
`;

export const StyledMarket = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: ${theme.palette.platinum[98]};
  height: 100%;
  overflow-y: hidden;
  position: relative;
`;

export const ShopItem = styled(shopItem)`
  border-radius: 0 0 16px 16px;
  width: calc(100% - 30px);
  align-self: center;

  height: 10vh;

  .bottom-container {
    height: 10vh;
    padding: 0 8px 0 !important;
    justify-content: center;
    row-gap: 3px;
    border-top: none;
  }

  .shop {
    align-self: end;
    & div {
      border: 3px solid ${theme.palette.sunRay[100]};
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 190px;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${theme.palette.platinum[95]};
  border-radius: 14px;
`;

export const Bookmark = styled(bookmark)`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 12px;
  left: 12px;
`;

export const BookmarkFill = styled(bookmarkFill)`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 12px;
  left: 12px;
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  padding: 18px 0;
  border-bottom: 3px solid ${theme.palette.platinum[95]};
`;

export const Container2 = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  color: ${theme.palette.platinum[80]};
  font-weight: 600;
  font-size: 12px;

  & .comment-count {
    font-weight: 800;
    font-size: 14px;
  }
`;

export const Container3 = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const Container4 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: ${theme.palette.darkGunmetal[100]};
`;

export const ProductDescription = styled.div`
  font-weight: 600;
  color: ${theme.palette.darkGunmetal[100]};
  text-align: justify;
  font-size: 15px;
`;

export const Container5 = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  padding: 10px 0 0;
`;

export const Container6 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container7 = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
  font-weight: 800;
  color: ${theme.palette.platinum[80]};

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const Container8 = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
  font-weight: 800;
  color: ${theme.palette.paleGreen[100]};

  & svg {
    width: 12px;
    height: 12px;
    transform: rotate(270deg);
    & path {
      stroke: ${theme.palette.paleGreen[100]}!important;
    }
  }
`;

export const Container14 = styled.div`
  padding: 5px 15px 30px;
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const Button = styled(button)`
  margin-top: 20px;
  color: ${theme.palette.platinum[100]};
  font-size: 18px;
`;

export const Container15 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container16 = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  & .price {
    font-weight: 800;
    font-size: 16px;
    color: ${theme.palette.platinum[80]};
    text-decoration: line-through;
  }
`;

export const Container17 = styled.div`
  display: flex;
  column-gap: 3px;
  align-items: center;
  font-weight: 800;
  font-size: 17px;
  color: ${theme.palette.darkGunmetal[100]};

  & span {
    color: ${theme.palette.platinum[80]};
    font-size: 14px;
  }
`;
