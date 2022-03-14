import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../Actions/addItem";
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
  CheckOutImage,
} from "./Styles";

const CheckOut = () => {
  const products = useSelector((state) => state.addItemReducers);
  const dispatch = useDispatch();
  return (
    <>
      <CheckoutMain>
        <CheckOutLeft>
          <Checkouthead>Your Shopping Basket</Checkouthead>
          <CheckProduct>
            {products.data.map((item) => (
              <CheckOutItem key={item.id}>
                <CheckOutImage>
                  <img src={item.image} alt={item.description}></img>
                </CheckOutImage>
                <ProductDetail>
                  <Description>{item.description}</Description>
                  <Price>{item.price}</Price>
                  <button onClick={() => dispatch(removeItem(item.id))}>
                    Remove From Basket
                  </button>
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
