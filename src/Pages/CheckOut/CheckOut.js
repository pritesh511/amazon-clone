import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../Actions/addItem";
import CheckOutBox from "../../Components/CheckOutBox/CheckOutBox";
import StarIcon from "@mui/icons-material/Star";
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
  ProductRating,
} from "./Styles";

const CheckOut = () => {
  const products = useSelector((state) => state.addItemReducers);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducers);
  return (
    <>
      <CheckoutMain>
        <CheckOutLeft>
          <h4>Hello, {user?.user?.email}</h4>
          <Checkouthead>Your Shopping Basket</Checkouthead>
          <CheckProduct>
            {products.data.map((item) => (
              <CheckOutItem key={item.id}>
                <CheckOutImage>
                  <img src={item.image} alt={item.description}></img>
                </CheckOutImage>
                <ProductDetail>
                  <Description>{item.description}</Description>
                  <Price>${item.price}</Price>
                  <ProductRating>
                    {Array(item.rating)
                      .fill()
                      .map((item) => (
                        <StarIcon />
                      ))}
                  </ProductRating>
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
