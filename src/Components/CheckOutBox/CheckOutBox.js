import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../../Reducers/addItemReducers";
import { SubTotal } from "./Styles";

const CheckOutBox = () => {
  const ItemNumber = useSelector((state) => state.addItemReducers);
  const ItemNum = ItemNumber.data.length;
  const history = useHistory();
  return (
    <>
      <SubTotal>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal(<span>{ItemNum}</span> items): <strong>{value}</strong>
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
          onClick={() => {
            history.push(ItemNum >= 1 ? "/payment" : "/");
          }}
        >
          Proceed to CheckOut
        </button>
      </SubTotal>
    </>
  );
};

export default CheckOutBox;
