import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <>
      <Container>
        <a>
          <img src="/images/logo.svg" />
        </a>

        <Menu>
          <a href="#">Model S</a>

          <a href="#">Model Y</a>

          <a href="#">Model 3</a>

          <a href="#">Model X</a>
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
          <CustomMenu onClick={() => setBurgerStatus(true)} />
        </RightMenu>
      </Container>
      <BurgerNav show={burgerStatus}>
        <CustomWrap>
          <CrossButton onClick={() => setBurgerStatus(false)} />
        </CustomWrap>
        <li>
          {" "}
          <a href="#">Existing Inventory</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Used Inventory</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Trade-In</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Test Drive</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Cybertruck</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Roadster</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Semi</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Charging</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Powerwall</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Commercial Energy</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Utilities</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Find Us</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Support</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Investor Relations</a>{" "}
        </li>
      </BurgerNav>
    </>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    padding: 0 10px;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 10px;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  text-align: start;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  z-index: 16;

  li {
    list-style-type: none;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-size: 13px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    color: #666;
  }
  padding: 30px;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 0.5s ease-in-out;
`;

const CrossButton = styled(CloseIcon)`
  cursor: pointer;
`;

const CustomWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
