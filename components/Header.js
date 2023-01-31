import Image from "next/image";
import styled from "styled-components";
import React from "react";
import { globalColor } from "../shared/Style";

const Header = () => {
  return (
    <Wrapper>
      <div className="menu">
        <h5 className="name">Yebin's Portfolio</h5>

        <a href="#">
          <h5 className="resume">RESUME</h5>
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 15vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;

  .menu {
    display: flex;
    width: 100%;
    font-family: "Cormorant Garamond", serif;
    justify-content: space-between;
    color: #fff;
    font-size: 29px;
    padding: 0 2rem;

    a:hover {
      color: ${globalColor.primary};
    }
  }
`;

export default Header;
