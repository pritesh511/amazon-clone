import styled from "styled-components";

const HeroWrapper = styled.div`
  margin-bottom: -150px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
const HeroImage = styled.img`
  width: 100%;
  height: 100%;
`;
const ProductWrap = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
const ProductRow = styled.div`
  display: flex;
  margin: 0 5px;
  width: 100%;
`;

export { HeroWrapper, HeroImage, ProductWrap, ProductRow };
