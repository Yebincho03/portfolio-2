import Image from "next/image";
import styled from "styled-components";
import React from "react";
import { globalColor } from "../shared/Style";
import Header from "../components/Header";
import Aboutme from "../public/images/aboutme.png";
import Heart from "../public/images/Red-Heart.png";
import X from "../public/images/x.png";
import Behance from "../public/icons/behance.js";
import GithubIcon from "../public/icons/github.js";
import Linkedin from "../public/icons/linkedin.js";

function About() {
  return (
    <Container>
      <Header />
      <div className="wrapper">
        <div className="img-container grid-1 grid">
          <Image className="deco item1" src={Heart} alt="heart" />
          <Image className="deco item2" src={X} alt="x" />
          <Image
            className="profile-image"
            src={Aboutme}
            alt="Yebin Cho image"
          />
        </div>
        <div className="content-section grid-2 grid">
          <p className="headline">
            I’m Yebin Cho, a <strong> Web and Graphic designer </strong> and{" "}
            <strong>Front-end Developer</strong>.
          </p>
          <p className="description">
            I love working closely with technology, our society and people. As a
            designer, I’m open to learn and adapt to new ways of work, new
            skills and new industries as long as I’m solving meaningful problems
            that help people with solutions that are simple and memorable. I
            care a lot about culture, and I always seek out to make authentic
            relationships with the people I work with.
          </p>
        </div>
        <div className="education grid-3 grid">
          <span className="subTitle">Education</span>
          <div className="section">
            <p className="small-text bold">
              Web and Mobile app design and development
            </p>
            <p className="small-text">
              Langara College • Post-Degree Diploma • 2021-2022
            </p>
            <p className="small-text list">
              • HTML, CSS, JavaScript, react, react native, firebase, jquery,
              sass, git, rest API etc.
            </p>
          </div>
          <div className="section">
            <p className="small-text bold">Department of Scenography</p>
            <p className="small-text">
              Sangmyung University • South Korea • 2013-2017
            </p>
            <p className="small-text list">
              • Creating visual and spatial elements for performances, events,
              or installations.
            </p>
          </div>
        </div>
        <div className="experience grid-4 grid">
          <span className="subTitle">Experience</span>
          <div className="section">
            <p className="small-text bold">Web &amp; Graphic Designer</p>
            <p className="small-text">
              The company of immigration consulting • 2021 - present •
            </p>
            <p className="small-text list">
              • Creating a website design <br />
              • Making the site fully functional through coding
              <br />• Designing print ads, marketing materials, a logo, social
              media images
            </p>
          </div>
          <div className="section">
            <p className="small-text bold">Graphic Designer</p>
            <p className="small-text">With me • 2018 - 2019 •</p>
            <p className="small-text list">
              • Product design &amp; package design
            </p>
          </div>
        </div>
        <div className="contact grid-5 grid">
          <span className="subTitle">Contact Me</span>
          <div className="section">
            <p className="small-text bold">EMAIL</p>
            <p className="small-text">yebincho94@gmail.com</p>
            <p className="small-text bold">PHONE</p>
            <p className="small-text">+1 (236)-512-1029</p>
          </div>
        </div>
        <div className="sns grid-6 grid">
          <span className="subTitle">Explore more about me</span>
          <div className="icon-section">
            <a href="https://www.behance.net/yebin-cho" target="_blank">
              <Behance fill="#949494" className="icon" alt="behance" />
            </a>
            <a href="https://www.linkedin.com/in/yebincho/" target="_blank">
              <Linkedin fill="#949494" className="icon" />
            </a>
            <a href="https://github.com/Yebincho03" target="_blank">
              <GithubIcon fill="#949494" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100vw;
  height: auto;
  flex-direction: column;
  background: #f5f5f5;
  align-items: center;

  .wrapper {
    display: grid;
    max-width: 900px;
    grid-template-columns: 1fr 0.8fr 0.8fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 70px;
    grid-row-gap: 90px;
    padding: 10rem 0;
    color: ${globalColor.grey10};
    font-family: "outfit", sans-serif;
    font-weight: 300;

    @media (max-width: 850px) {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-row-gap: 5rem;
      grid-column-gap: 0px;
      padding: 0 3rem;

      .grid-1 {
        margin-top: 5rem;
        justify-self: center;
        //text-align: center;
      }

      .grid-2 {
        grid-column: 1 / span 1 !important;
        grid-column-start: 1 !important;
      }
    }

    .grid-2 {
      grid-column: 1 / span 2;
      grid-column-start: 2;
    }

    strong {
      color: ${globalColor.grey100};
    }
    .subTitle {
      font-size: 23px;
      line-height: 30px;
      font-weight: 800;
      color: ${globalColor.grey100};
    }
    .bold {
      color: ${globalColor.grey100};
      font-weight: 500;
    }
    .small-text {
      font-size: 14px;
      line-height: 20px;
    }
    .list {
      padding-top: 10px;
    }
    .section {
      padding-top: 30px;
    }

    .img-container {
      position: relative;
      .deco {
        position: absolute;
        height: auto;
      }
      .item1 {
        width: 100px;
        top: 150px;
        right: 0;
      }
      .item2 {
        width: 45px;
        top: 20px;
        left: 20px;
      }

      .item1:hover {
        animation: animateHeart 1.2s infinite;
      }
      @keyframes animateHeart {
        0% {
          transform: scale(0.8);
        }
        5% {
          transform: scale(0.9);
        }
        10% {
          transform: scale(0.8);
        }
        15% {
          transform: scale(1);
        }
        50% {
          transform: scale(0.8);
        }
        100% {
          transform: scale(0.8);
        }
      }

      .item2:hover {
        animation: rotation 1s linear infinite;
      }
      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .profile-image {
        width: 300px;
        height: auto;
      }
    }

    .content-section {
      font-size: 23px;
      line-height: 30px;

      .description {
        margin-top: 1rem;
      }
    }
    .icon-section {
      display: flex;
      gap: 2rem;
      padding: 2rem 0;

      .icon:hover {
        transform: translateY(-0.6em);
        transition: transform 0.3s ease;
        fill: ${globalColor.grey100};
      }
    }
  }
`;

export default About;
