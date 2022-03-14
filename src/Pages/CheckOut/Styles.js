import styled from "styled-components";

const CheckoutMain = styled.div`
  padding: 20px;
  margin: 8px;
  background-color: var(--white-color);
  display: flex;
  align-items: flex-start;
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
const CheckProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
`;
const CheckOutItem = styled.div`
  display: flex;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid black;
`;
const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  padding: 12px 16px;
  button {
    background-color: var(--yellow-color);
    padding: 6px 8px;
    margin-top: 8px;
    border-radius: 6px;
    cursor: pointer;
    color: #111;
    border: 1px solid;
    border-color: #a88734 #9c7e31;
    margin-right: auto;
  }
`;
const Description = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: #000;
`;
const Price = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #000;
`;
const CheckOutImage = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export {
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
};
