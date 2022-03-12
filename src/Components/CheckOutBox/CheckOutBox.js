import React from "react";
import { SubTotal } from "./Styles";

const CheckOutBox = () => {
  return (
    <>
      <SubTotal>
        <div>SubTotal (18 items) $9638</div>
        <button>Proceed to CheckOut</button>
      </SubTotal>
    </>
  );
};

export default CheckOutBox;
