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
        <div className="content">
          <Header />
          <h1 className="myName">YEBIN CHO</h1>
          <h5 className="headline">
            Creative, Front-end developer and designer
          </h5>
          <DescriptiveText className="about">
            I'm passionate about solving problems through code and creating
            interactive applications and experiences on the web.
            <br />
            I'm excited to work alongside other amazing programmers and learn so
            much more!
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
          <div className="imgContainer">
            <Image
              className="image"
              src={HeroImg}
              alt="heroimg"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .body {
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: auto;
      width: 100vw;
      padding: 0 2rem;

      .myName {
        font-family: "Cormorant Garamond", serif;
        font-size: 80px;
        color: ${globalColor.primary};
        margin: 0;
        text-align: center;
        padding-top: 6rem;
      }

      .headline {
        font-family: "Outfit", sans-serif;
        font-size: 27px;
        font-weight: 300;
        line-height: 40px;
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
      .imgContainer {
        display: flex;
        justify-content: center;
        padding: 5rem 0;
        object-fit: cover;

        .image {
          object-fit: cover;
        }
      }

      @media (min-width: 419px) {
        .myName {
          font-size: calc((0.03 * 100vw + (38px)));
        }
        .headline {
          font-size: calc((0.01 * 100vw + (18px)));
        }

        .about {
          padding: 1rem 1rem;
        }
      }

      @media (min-width: 1440px) {
        .myName {
          font-size: 80px;
        }
      }
    }
  }
`;

export default Hero;
