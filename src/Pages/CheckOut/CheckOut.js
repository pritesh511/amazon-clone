import React from "react";
import { useSelector } from "react-redux";
import CheckOutBox from "../../Components/CheckOutBox/CheckOutBox";
import {
  CheckoutMain,
  CheckOutLeft,
  CheckOutRight,
  Checkouthead,
  CheckProduct,
  CheckOutItem,
  ProductDetail,
  Description,
  Price,
} from "./Styles";

const CheckOut = () => {
  const products = useSelector((state) => state.addItemReducers);
  return (
    <>
      <CheckoutMain>
        <CheckOutLeft>
          <Checkouthead>Your Shopping Basket</Checkouthead>
          <CheckProduct>
            {products.data.map((item) => (
              <CheckOutItem>
                <img src={item.image} alt={item.description}></img>
                <ProductDetail>
                  <Description>{item.description}</Description>
                  <Price>{item.price}</Price>
                </ProductDetail>
              </CheckOutItem>
            ))}
          </CheckProduct>
        </CheckOutLeft>
        <CheckOutRight>
          <CheckOutBox />
        </CheckOutRight>
      </CheckoutMain>
    </>
  );
};

export default CheckOut;
