import Image from "next/image";
import styled from "styled-components";
import React from "react";
import Header from "../components/Header";
import { gsap } from "gsap";
import { useState, useEffect } from "react";
import { globalColor, DescriptiveText } from "../shared/Style";
import GithubIcon from "../public/icons/github.js";
import Linkedin from "../public/icons/linkedin.js";
import Behance from "../public/icons/behance";
import HeroImg from "../public/mycharacter.png";

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
      <Header />
      <div className="body">
        <div className="cursor"></div>

        <div className="shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>

        <div className="content">
          <h1>YEBIN CHO</h1>
          <h5>Creative, Front-end developer and designer</h5>
          <DescriptiveText className="about">
            I am passionate about solving problems through code and creating
            interactive applications and experiences on the web.
            <br />I am excited to work alongside other amazing programmers and
            learn so much more!
          </DescriptiveText>

          <div className="icons">
            <div>
              <a href="https://github.com/Yebincho03">
                <GithubIcon fill="#949494" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/yebincho/">
                <Linkedin fill="#949494" />
              </a>
            </div>
            <div>
              <a href="https://github.com/Yebincho03">
                <Behance fill="#949494" />
              </a>
            </div>
          </div>
          <div className="img">
            <Image src={HeroImg} alt="heroimg" width={400} height={400} />
          </div>
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
        margin: -85px 0 0 -45px;
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
      z-index: 1;
      padding: 0 2rem;

      h1 {
        font-family: "Cormorant Garamond", serif;
        font-size: 80px;
        color: ${globalColor.primary};
        margin: 0;
        text-align: center;
      }

      h5 {
        font-family: "Outfit", sans-serif;
        font-size: 27px;
        font-weight: 300;
        line-height: 35px;
        color: ${globalColor.white};
        margin: 0;
        text-align: center;
      }
      .about {
        text-align: center;
        padding: 2rem 2rem;
      }

      .icons {
        display: flex;
        justify-content: center;
        gap: 5rem;
        padding: 1rem 2rem;
      }
      .img {
        display: flex;
        justify-content: center;
        border-radius: 50px;
      }

      @media (min-width: 419px) {
        h1 {
          font-size: calc((0.03 * 100vw + (38px)));
        }
        h5 {
          font-size: calc((0.01 * 100vw + (18px)));
        }

        .about {
          padding: 1rem 1rem;
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
