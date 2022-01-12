import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterPart>
      <li>
        {" "}
        <a href="#">Tesla © 2022</a>{" "}
      </li>
      <li>
        {" "}
        <a href="#">Privacy & Legal</a>{" "}
      </li>
      <li>
        {" "}
        <a href="#">Contact</a>{" "}
      </li>
      <li>
        {" "}
        <a href="#">Careers</a>{" "}
      </li>
      <li>
        {" "}
        <a href="#">News</a>{" "}
      </li>
      <li>
        {" "}
        <a href="#">Engage</a>{" "}
      </li>
      <li>
        {" "}
        <a href="#">Locations</a>{" "}
      </li>
    </FooterPart>
  );
}

export default Footer;

const FooterPart = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  margin-top :auto;

  li {
      padding 20px 10px ;
    list-style-type: none;
  }
  a {
      font-weight: 600;
      color: rgba(0,0,0,0.5);
    text-decoration: none;
  }
`;
