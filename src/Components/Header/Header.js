import React from "react";
import { ReactComponent as LogoImg } from "../../Assets/amazon_logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  HeaderWrapper,
  AppLogo,
  Searchwrapper,
  HeaderMenu,
  HeaderOption,
  HeadUpSpan,
  HeadBottomSpan,
  SearchInput,
  SearchButton,
  HeaderBasket,
  ItemSpan,
} from "./Styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <AppLogo>
          <LogoImg />
        </AppLogo>
      </Link>
      <Searchwrapper>
        <SearchInput></SearchInput>
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </Searchwrapper>
      <HeaderMenu>
        <HeaderOption>
          <HeadUpSpan>Hello, Guest</HeadUpSpan>
          <HeadBottomSpan>Account & List</HeadBottomSpan>
        </HeaderOption>
        <HeaderOption>
          <HeadUpSpan>Returns</HeadUpSpan>
          <HeadBottomSpan>& Orders</HeadBottomSpan>
        </HeaderOption>
        <HeaderOption>
          <HeadUpSpan>Your</HeadUpSpan>
          <HeadBottomSpan>Prime</HeadBottomSpan>
        </HeaderOption>
        <Link to="/checkout">
          <HeaderBasket>
            <ShoppingBasketIcon />
            <ItemSpan>0</ItemSpan>
          </HeaderBasket>
        </Link>
      </HeaderMenu>
    </HeaderWrapper>
  );
};

export default Header;
