import Image from "next/image";
import styled from "styled-components";
import React from "react";
import { globalColor } from "../shared/Style";
import Header from "../components/Header";
import Hero from "../public/images/hero-courte.jpg";
import Overview from "../public/images/overview-01.png";

function Courte() {
  return (
    <Container>
      <Header />
      <div className="wrapper">
        <div className="project-headline">Courte Application</div>
        <Image src={Hero} className="heroImg" alt="court-heroimg" />
        <div className="grid-wrapper">
          <div className="grid-1 introduction grid">
            <p className="intro">INTRODUCTION</p>
            <span className="introduction">
              Courte is a mobile application that offers a comprehensive
              solution to facilitate the use and sharing of public tennis courts
              by enabling users to find the closest parks with available courts,
              manage queues and connect with nearby users to play together. As a
              front-end developer, I used React Native with Expo along with the
              Native Base component library to build Courte. I displayed dynamic
              park data pulled from MongoDB via GraphQL queries on the landing
              page.
            </span>
          </div>
          <div className="grid-2 grid">
            <p className="myrole">MY ROLE</p>
            <p className="content">Front-end developer, UI developer</p>
          </div>
          <div className="grid-3 grid">
            <p className="myteam">THE TEAM</p>
            <p className="content">
              1 designer, 4 full-stack developers, 2 front-end designers
            </p>
          </div>
          <div className="grid-4 grid">
            <p className="timeline">TIMELINE</p>
            <p className="content">2022.05 - 2022.08</p>
          </div>
          <div className="grid-5 grid">
            <p className="tech">TECH</p>
            <p className="content">
              React Native, JavaScript, Expo, Firebase Authentication, Google
              Auth, GraphQL
            </p>
          </div>
          <div className="grid-6 grid">
            <p className="tech">WEBSITE</p>
            <p className="content">
              <a href="https://www.courte.app/">https://www.courte.app/</a>
            </p>
          </div>
        </div>
        <div className="overview">
          <div>
            <p className="overview-title">Overview of Courte</p>
            <p>park list • join line • pairing</p>
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
      width: 900px;
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

      .grid-1 {
        grid-column: 1 / span 3;

        .introduction {
          font-size: 20px;
          color: ${globalColor.grey100};
          line-height: 30px;
        }
      }
      .grid-5 {
        grid-column: 1 / span 2;
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

        a:hover {
          color: ${globalColor.grey100};
        }
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

export default Courte;
