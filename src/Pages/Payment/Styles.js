import styled from "styled-components";

const PaymentWrapper = styled.div`
  background-color: var(--white-color);
  h1 {
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgray;
    a {
      text-decoration: none;
    }
  }
`;
const AdressMain = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgray;
`;
const PaymentTitle = styled.h3`
  flex: 0.2;
`;
const PaymentAdresss = styled.p``;
const AdressWrap = styled.div`
  flex: 0.8;
`;
const AllItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgray;
`;
const PaymentItemWrap = styled.div`
  flex: 0.8;
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

const PaymentMethodWrap = styled.div`
  flex: 1 1 0;
`;
const ProductRating = styled.div`
  color: var(--yellow-color);
  margin-top: 4px;
`;

export {
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
};
