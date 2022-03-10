import React from "react";

import StarIcon from "@mui/icons-material/Star";
import {
  ProductBox,
  ProductDescription,
  ProductPrice,
  ProductRating,
  ProductBottom,
  ProductUpper,
  ProductImg,
} from "./Styles";

const Product = (props) => {
  const { description, price, rating, image } = props;
  return (
    <>
      <ProductBox>
        <ProductUpper>
          <ProductDescription>{description}</ProductDescription>
          <ProductPrice>$ {price}</ProductPrice>
          <ProductRating>
            {Array(rating)
              .fill()
              .map((item) => (
                <StarIcon />
              ))}
          </ProductRating>
        </ProductUpper>
        <ProductBottom>
          <ProductImg src={image}></ProductImg>
          <button>Add to cart</button>
        </ProductBottom>
      </ProductBox>
    </>
  );
};

export default Product;
