import Image from "next/image";
import styled from "styled-components";
import React from "react";
import { globalColor } from "../shared/Style";
import DecoImage from "../public/decoImage.png";
import Header from "../components/Header.js";
import Project from "./Project";

const Work = () => {
  return (
    <Wrapper>
      <Header />
      <div className="headline">
        Curious Designer,
        <br />
        Creative Developer
      </div>
      <Project />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;

  .headline {
    font-size: calc((0.03 * 100vw + (45px)));
    font-family: "outfit", sans-serif;
    font-weight: 700;
    padding: 20vh 5vw;
    color: #000;
    background-image: url("decoImage.png");
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: contain;
  }

  @media (max-width: 653px) {
    .headline {
      font-size: calc((0.03 * 100vw + (30px)));
      padding: 10vh 8vw;
      background-position: center;
      text-align: center;
    }
  }
`;

export default Work;
