import React from "react";
import { useSelector } from "react-redux";
import { SubTotal } from "./Styles";

const CheckOutBox = () => {
  const ItemNumber = useSelector((state) => state.addItemReducers);
  const ItemNum = ItemNumber.data.length;

  return (
    <>
      <SubTotal>
        <p>
          SubTotal (<span>{ItemNum}</span> items): <strong>$9638</strong>
        </p>
        <button>Proceed to CheckOut</button>
      </SubTotal>
    </>
  );
};

export default CheckOutBox;
