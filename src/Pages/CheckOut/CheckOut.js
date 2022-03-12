import React from "react";
import CheckOutBox from "../../Components/CheckOutBox/CheckOutBox";
import {
  CheckoutMain,
  CheckOutLeft,
  CheckOutRight,
  Checkouthead,
  CheckProduct,
} from "./Styles";

const CheckOut = () => {
  return (
    <>
      <CheckoutMain>
        <CheckOutLeft>
          <Checkouthead>Your Shopping Basket</Checkouthead>
          <CheckProduct></CheckProduct>
        </CheckOutLeft>
        <CheckOutRight>
          <CheckOutBox />
        </CheckOutRight>
      </CheckoutMain>
    </>
  );
};

export default CheckOut;
