import Image from "next/image";
import styled from "styled-components";
import React from "react";

const SideBar = () => {
  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 150px;
  height: 100vh;
  background-color: #212121;
  display: flex;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 10;
`;

export default SideBar;
