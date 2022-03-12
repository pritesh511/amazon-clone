import styled from "styled-components";

const CheckoutMain = styled.div`
  padding: 20px;
  margin: 8px;
  background-color: var(--white-color);
  display: flex;
  border: 1px solid #e4e4e5;
`;
const CheckOutLeft = styled.div`
  flex: 1 1 0;
`;
const CheckOutRight = styled.div`
  width: 300px;
  padding: 16px;
  background-color: #f3f3f3;
  border: 1px solid var(--dark-color);
  border-radius: 6px;
  margin: 0 8px;
`;
const Checkouthead = styled.h3`
  display: block;
  font-size: 28px;
  line-height: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e4e4e5;
`;
const CheckProduct = styled.div``;

export {
  CheckoutMain,
  CheckOutLeft,
  CheckOutRight,
  Checkouthead,
  CheckProduct,
};
