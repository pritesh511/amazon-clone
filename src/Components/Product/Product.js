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
import { useDispatch } from "react-redux";
import { addItem } from "../../Actions/addItem";

const Product = (props) => {
  const { id, description, price, rating, image } = props;
  const dispatch = useDispatch();
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
          <button
            onClick={() =>
              dispatch(addItem(id, description, price, rating, image))
            }
          >
            Add to cart
          </button>
        </ProductBottom>
      </ProductBox>
    </>
  );
};

export default Product;
