import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../../Actions/addItem";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import {
  PaymentWrapper,
  AdressMain,
  PaymentTitle,
  PaymentAdresss,
  AdressWrap,
  AllItemWrapper,
  PaymentItemWrap,
  CheckOutItem,
  CheckOutImage,
  ProductDetail,
  Description,
  Price,
  PaymentMethodWrap,
  ProductRating,
} from "./Styles";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../Reducers/addItemReducers";
import { useHistory } from "react-router-dom";

const Payment = () => {
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceede] = useState(false);
  const [processing, setProcessing] = useState("");
  const [client, setClient] = useState(true);
  const dispatch = useDispatch();
  const ItemNumber = useSelector((state) => state.addItemReducers);
  const ItemNum = ItemNumber.data.length;
  const user = useSelector((state) => state.authReducers);
  const products = useSelector((state) => state.addItemReducers);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  useEffect(() => {
    const getClient = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${getBasketTotal(ItemNumber.data) * 100}`,
      });
      setClient(response.data.client);
    };
    getClient();
  }, [ItemNumber.data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(client, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceede(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <>
      <PaymentWrapper>
        <h1>
          Checkout (<Link to="/">{products.data.length} items</Link>)
        </h1>
        <AdressMain>
          <PaymentTitle>Delivery Address:</PaymentTitle>
          <AdressWrap>
            <PaymentAdresss>
              {user.user.email ? user.user.email : "Guest"}
            </PaymentAdresss>
            <PaymentAdresss>304, krishna Township</PaymentAdresss>
            <PaymentAdresss>surat, gujarat, 39504</PaymentAdresss>
          </AdressWrap>
        </AdressMain>
        <AllItemWrapper>
          <PaymentTitle>Review Item and Delivery:</PaymentTitle>
          <PaymentItemWrap>
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
          </PaymentItemWrap>
        </AllItemWrapper>

        <AllItemWrapper>
          <PaymentTitle>Payment:</PaymentTitle>
          <PaymentMethodWrap>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      Subtotal(<span>{ItemNum}</span> items):{" "}
                      <strong>{value}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(ItemNumber.data)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button
                disabled={processing || disabled || succeeded}
                onClick={() => history.push("/orders")}
              >
                <span>{processing ? <p>Processsing</p> : "Buy Now"}</span>
              </button>

              {error && <div>{error}</div>}
            </form>
          </PaymentMethodWrap>
        </AllItemWrapper>
      </PaymentWrapper>
    </>
  );
};

export default Payment;
