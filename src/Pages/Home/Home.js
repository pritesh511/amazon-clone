import React from "react";
import { HeroWrapper, HeroImage, ProductWrap } from "./Styles";
import HomeImg from "../../Assets/hero.jpg";
import Product from "../../Components/Product/Product";

const Home = () => {
  return (
    <>
      <HeroWrapper>
        <HeroImage src={HomeImg}></HeroImage>
      </HeroWrapper>
      <ProductWrap>
        <Product />
      </ProductWrap>
    </>
  );
};

export default Home;
