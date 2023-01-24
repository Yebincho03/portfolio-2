import Image from "next/image";
import styled from "styled-components";
import React from "react";
import Header from "../components/Header";
import { gsap } from "gsap";
import { useState, useEffect } from "react";
import { globalColor } from "../shared/Style";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      gsap.set(".cursor", {
        x: e.clientX,
        y: e.clientY,
      });

      gsap.to(".shape", {
        x: e.clientX,
        y: e.clientY,
        stagger: -0.1,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <Wrapper>
      <div className="body">
        <Header />
        <div className="cursor"></div>

        <div className="shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>

        <div className="content">
          <h1>I'M YEBIN CHO</h1>
          <h5>Front-end developer and designer</h5>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .body,
  body * {
    cursor: none;
    background-color: ${globalColor.grey100};
    padding: 0 2rem;
  }
  .body {
    .shapes {
      position: relative;
      width: 100vw;
      height: 100vh;

      .shape {
        will-change: transform;
        position: absolute;
        border-radius: 50%;
        z-index: 3;
      }
      .shape.shape-1 {
        border: 1px solid #aab6fb;
        width: 30px;
        height: 30px;
        margin: -95px 0 0 -55px;
      }
      .shape.shape-2 {
        background: #6096fd;
        width: 10px;
        height: 10px;
        margin: -80px 0 0 -40px;
      }
    }
    .content {
      top: 0;
      left: 0;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      padding: 0 0 0 50px;
      z-index: 1;

      h1 {
        font-family: "Cormorant Garamond", serif;
        font-size: 80px;
        color: ${globalColor.primary};
        margin: 0;
        text-align: center;
      }

      h5 {
        font-family: "Cormorant Garamond", serif;
        font-size: 30px;
        color: #fff;
        margin: 0;
        text-align: center;
      }

      @media (min-width: 419px) {
        h1 {
          font-size: calc((0.03 * 100vw + (38px)));
        }
      }

      @media (min-width: 1440px) {
        h1 {
          font-size: 80px;
        }
      }
    }
  }
`;

export default Hero;
