import styled from "styled-components";

const HeaderWrapper = styled.div`
  height: 60px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  background-color: var(--header-Bg);
  position: sticky;
  top: 0;
  z-index: 999;
`;
const AppLogo = styled.div`
  width: 118px;
  padding: 8px;
  margin-top: 6px;
  cursor: pointer;
  svg {
    height: 100%;
    width: 100%;
    path {
      fill: var(--white-color);
    }
  }
`;
const Searchwrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
  margin-left: 32px;
  flex: 1 1 0;
`;
const SearchInput = styled.input`
  height: 35px;
  display: flex;
  flex: 1 1 0;
  padding: 8px;
  border: none;
  outline: none;
  :focus {
    border: none;
    outline: none;
  }
`;
const SearchButton = styled.div`
  height: 35px;
  width: 35px;
  background-color: var(--search-button);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    display: block;
    path {
      fill: var(--dark-color);
    }
  }
`;
const HeaderMenu = styled.div`
  display: flex;
  align-self: center;
  margin-left: 16px;
`;
const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  margin-right: 8px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    border-color: var(--white-color);
  }
`;
const HeadUpSpan = styled.span`
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  color: var(--white-color);
`;
const HeadBottomSpan = styled.span`
  font-size: 14px;
  line-height: 15px;
  font-weight: 700;
  color: var(--white-color);
`;
const HeaderBasket = styled.div`
  color: var(--white-color);
  display: flex;
  align-items: center;
  padding: 4px;
`;
const ItemSpan = styled.span`
  font-size: 14px;
  line-height: 15px;
  font-weight: 700;
  margin-left: 8px;
`;

export {
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
};
