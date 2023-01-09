import Image from "next/image";
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
          <div className="shape shape-4"></div>
        </div>

        <div className="content">
          <h5>Hey there!</h5>
          <h1>I'm Yebin, Front-end Developer</h1>
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
      background-color: #031b88;

      .shape {
        will-change: transform;
        position: absolute;
        border-radius: 50%;
      }
      .shape.shape-1 {
        background: #6096fd;
        width: 750px;
        height: 750px;
        margin: -425px 0 0 -425px;
      }
      .shape.shape-2 {
        background: #aab6fb;
        width: 500px;
        height: 500px;
        margin: -320px 0 0 -320px;
      }
      .shape.shape-3 {
        background: #fb7b8e;
        width: 350px;
        height: 350px;
        margin: -230px 0 0 -230px;
      }
      .shape.shape-4 {
        background: #faa7b8;
        width: 220px;
        height: 220px;
        margin: -180px 0 0 -180px;
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
      background: #fafafa;
      padding: 0 0 0 50px;
      mix-blend-mode: screen;

      h1 {
        font-size: 80px;
        color: #000;
        margin: 0;
        text-align: left;
      }
      h5 {
        font-size: 30px;
        color: #000;
        margin: 0;
        text-align: left;
      }

      @media (min-width: 419px) {
        h1 {
          font-size: 80px;
          font-size: calc((0.05 * 100vw + (58px)));
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
