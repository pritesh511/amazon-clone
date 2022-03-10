import styled from "styled-components";

const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--white-color);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12);
  position: relative;
  z-index: 1;
  width: 100%;
  max-height: 400px;
  margin: 10px;
`;
const ProductDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const ProductPrice = styled.span`
  margin-top: 5px;
`;
const ProductRating = styled.div`
  color: var(--yellow-color);
  margin-top: 4px;
`;
const ProductUpper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;
`;
const ProductBottom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  button {
    background-color: var(--yellow-color);
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    color: #111;
    border: 1px solid;
    border-color: #a88734 #9c7e31;
  }
`;
const ProductImg = styled.img`
  object-fit: contain;
  margin-bottom: 15px;
  width: 100%;
  max-height: 200px;
`;

export {
  ProductBox,
  ProductDescription,
  ProductPrice,
  ProductRating,
  ProductUpper,
  ProductBottom,
  ProductImg,
};
