import Image from "next/image";
import styled from "styled-components";
import React from "react";
import { globalColor } from "../shared/Style";
import Header from "../components/Header";
import Hero from "../public/images/hero-picbeak.jpg";
import Overview from "../public/images/overview-pic.png";

function Picbeak() {
  return (
    <Container>
      <Header />
      <div className="wrapper">
        <div className="project-headline">
          Picbeak Full Stack Web Application
        </div>
        <Image src={Hero} className="heroImg" alt="picbeak-heroimg" />
        <div className="grid-wrapper">
          <div className="grid-1 introduction grid">
            <p className="intro">INTRODUCTION</p>
            <span className="introduction">
              www.picbeak.com is a youth-focused web application that provides
              educational information about region-specific bird species. Users
              can identify birds they spot in the wild and add them to their
              personal virtual Beakpedia collection to track their progress and
              unlock new features. Picbeak was built with React and the site is
              hosted with Heroku. As a front-end developer, I developed stateful
              and streamlined front-end React functional components and
              interfaced with REST APIs via Axios requests to access and display
              dynamic data for users.
            </span>
          </div>
          <div className="grid-2 role grid">
            <p className="myrole">MY ROLE</p>
            <p className="content">Front-end developer, UI developer</p>
          </div>
          <div className="grid-3 team grid">
            <p className="myteam">THE TEAM</p>
            <p className="content">
              1 designer, 3 full-stack developers, 2 front-end designers
            </p>
          </div>
          <div className="grid-4 grid">
            <p className="timeline">TIMELINE</p>
            <p className="content">2022.01 - 2022.04</p>
          </div>
          <div className="grid-5 grid">
            <p className="tech">TECH</p>
            <p className="content">
              React.js, JavaScript, REST APIs, Express.js, Mongoose, Node.js,
              MongoDB Atlas, Sass, Git, Heroku
            </p>
          </div>
        </div>
        <div className="overview">
          <div>
            <p className="overview-title">Overview of Picbeak</p>
            <p>explore • discover • collect</p>
          </div>
          <Image
            src={Overview}
            className="overview-img"
            alt="courte-overview"
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100vw;
  height: auto;
  flex-direction: column;
  background: ${globalColor.grey0};
  color: ${globalColor.grey100};
  align-items: center;
  font-family: "outfit", sans-serif;

  .wrapper {
    padding: 10rem 0;
    gap: 5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 850px) {
      .grid-wrapper {
        display: grid;
        grid-template-columns: 1fr !important;
        grid-template-rows: auto;
        grid-row-gap: 5rem;
        grid-column-gap: 0px;
        padding: 0 2rem;

        .grid {
          grid-column: 1 / span 1;
        }
      }
      .heroImg {
        width: 100% !important;
        height: auto;
      }
      .overview-title {
        font-weight: 500;
        font-size: 25px;
        line-height: 50px;
      }
      .overview-img {
        margin-top: 5rem;
        width: 100% !important;
        height: auto;
      }
    }

    .project-headline {
      font-size: 30px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 5rem;
    }
    .heroImg {
      width: 1200px;
      height: auto;
    }

    .grid-wrapper {
      max-width: 900px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 2rem 0;
      grid-column-gap: 2rem;
      grid-row-gap: 5rem;
      color: ${globalColor.grey10};

      .grid-1,
      .grid-5 {
        grid-column: 1 / span 3;

        .introduction {
          font-size: 20px;
          color: ${globalColor.grey100};
          line-height: 30px;
        }
      }

      .intro,
      .myrole,
      .myteam,
      .timeline,
      .tech {
        letter-spacing: 1px;
        font-size: 12px;
        margin-bottom: 2rem;
        font-weight: 500;
      }

      .content {
        font-size: 15px;
        line-height: 19px;
      }
    }
    .overview {
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      align-items: center;
      background: #f5f5f5;
      width: 100vw;
      padding: 5rem 0;
      color: ${globalColor.grey10};

      .overview-title {
        font-weight: 500;
        font-size: 25px;
        line-height: 50px;
      }
      .overview-img {
        margin-top: 5rem;
        width: 1000px;
        height: auto;
      }
    }
  }
`;

export default Picbeak;
