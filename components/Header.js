import Image from "next/image";
import styled from "styled-components";
import React from "react";

const Header = () => {
  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 10;
`;

export default Header;
