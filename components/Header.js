import Image from "next/image";
import styled from "styled-components";
import React from "react";

const Header = () => {
  return (
    <Wrapper>
      <div className="menu">
        <h5 className="name">Yebin's Portfolio</h5>

        <a href="#">
          <h5>RESUME</h5>
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  .menu {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #fff;
    font-size: 23px;

    .name {
      font-family: "Cormorant Garamond", serif;
    }

    a:hover {
      color: blue;
      border-bottom: 1px solid blue;
    }
  }
`;

export default Header;
