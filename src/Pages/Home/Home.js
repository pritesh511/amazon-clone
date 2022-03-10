import React from "react";
import { HeroWrapper, HeroImage, ProductWrap, ProductRow } from "./Styles";
import HomeImg from "../../Assets/hero.jpg";
import Product from "../../Components/Product/Product";
import ProductImg1 from "../../Assets/iphone_img.jpg";
import ProductImg2 from "../../Assets/laptop_img.jpg";
import ProductImg3 from "../../Assets/bluetooth_img.jpg";
import ProductImg4 from "../../Assets/kitchen_cup.jpg";
import ProductImg5 from "../../Assets/smartwatch.jpg";
import ProductImg6 from "../../Assets/home_furnish.jpg";

const Home = () => {
  return (
    <>
      <HeroWrapper>
        <HeroImage src={HomeImg}></HeroImage>
      </HeroWrapper>
      <ProductWrap>
        <ProductRow>
          <Product
            description="Apple iPhone 12 (128GB) - Blue"
            price={39.58}
            rating={4}
            image={ProductImg1}
          />
          <Product
            description="Lenovo IdeaPad 3 Intel Celeron N4020 14'' HD Thin & Light Laptop (4GB/256GB HDD/Windows 11/MS Office 2021/Platinum Grey/1.5Kg), 81WH007KIN"
            price={50000}
            rating={3}
            image={ProductImg2}
          />
        </ProductRow>
      </ProductWrap>
      <ProductWrap>
        <ProductRow>
          <Product
            description="Fire-Boltt Blast 1400 Over-Ear Bluetooth Wireless Headphones with 25H Playtime, Thumping Bass, Lightweight Foldable Compact Design with Google/Siri Voice Assistance & in Built mic & 40mm Drivers"
            price={390.58}
            rating={5}
            image={ProductImg3}
          />
          <Product
            description="Rajwada Home Crafts Modern Design Ceramic Milk and Coffee Mugs (Blue, 325 Ml)-Set of 6"
            price={90.14}
            rating={2}
            image={ProductImg4}
          />
          <Product
            description="Fitbit FB507BKBK Versa 2 Health & Fitness Smartwatch with Heart Rate, Music, Alexa Built-in, Sleep & Swim Tracking, Black/Carbon, One Size (S & L Bands Included) (Black/Carbon)"
            price={25.63}
            rating={3}
            image={ProductImg5}
          />
        </ProductRow>
      </ProductWrap>
      <ProductWrap>
        <ProductRow>
          <Product
            description="Fashion String 144 TC Microfibre Brown Double Bedsheet with 2 King Size Pillow Covers"
            price={100000}
            rating={4}
            image={ProductImg6}
          />
        </ProductRow>
      </ProductWrap>
    </>
  );
};

export default Home;
