import React from "react";
import {
  ProductBox,
  ProductDescription,
  ProductPrice,
  ProductRating,
} from "./Styles";

const Product = () => {
  return (
    <>
      <ProductBox>
        <ProductDescription>HelloProduct</ProductDescription>
        <ProductPrice>$ 30.99</ProductPrice>
        <ProductRating></ProductRating>
      </ProductBox>
    </>
  );
};

export default Product;
