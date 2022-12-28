import Image from "next/image";
import Script from "next/script";
import styled from "styled-components";
import React from "react";
import { gsap } from "gsap";
import { useState, useEffect } from "react";

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
        <div className="cursor"></div>

        <div className="shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className="content">
          <h1>Hey there!</h1>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .body,
  body * {
    cursor: none;
  }
  .body {
    font-family: "Mochiy Pop One", sans-serif;

    .shapes {
      position: relative;
      width: 100vw;
      height: 100vh;
      background-color: #2128bd;

      .shape {
        will-change: transform;
        position: absolute;
        border-radius: 50%;
      }
      .shape.shape-1 {
        background: #005ffe;
        width: 650px;
        height: 650px;
        margin: -325px 0 0 -325px;
      }
      .shape.shape-2 {
        background: #ffe5e3;
        width: 440px;
        height: 440px;
        margin: -220px 0 0 -220px;
      }
      .shape.shape-3 {
        background: #ffcc57;
        width: 270px;
        height: 270px;
        margin: -135px 0 0 -135px;
      }
    }
    .content {
      top: 0;
      left: 0;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      background: #fff;
      mix-blend-mode: screen;

      h1 {
        font-size: 100px;
        color: #000;
        margin: 0;
        text-align: center;
      }
    }
  }
`;

export default Hero;
