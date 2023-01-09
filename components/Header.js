import Image from "next/image";
import styled from "styled-components";
import React from "react";

const Header = () => {
  return (
    <Wrapper>
      <div className="menu">
        <div className="menuRight">
          <h5>Yebin Cho</h5>
          <h5>GRAPHIC DESIGNER,DEVELOPER</h5>
        </div>
        <div className="menuLeft">
          <h5>works</h5>
          <h5>about</h5>
          <h5>contact</h5>
        </div>
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
  border-bottom: 0.5px solid #fff;
  padding: 0 1rem;

  h5:hover {
    color: red;
  }

  .menu {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .menuRight {
      display: flex;
    }
    .menuLeft {
      display: flex;
    }
  }
`;

export default Header;
