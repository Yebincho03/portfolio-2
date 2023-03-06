import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import React from "react";
import { globalColor } from "../shared/Style";
import Header from "../components/Header";
import Hero from "../public/images/hero-courte.jpg";
import Overview from "../public/images/overview-01.png";
import Problem from "../public/images/problem.jpg";
import Work from "../public/images/work.png";

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
              manage queues and connect with nearby users to play together.
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
        <div className="problem">
          <div>
            <p className="problem-title">OPPORTUNITY</p>
            <p className="p-disc">
              The first come, first serve basis is fair, but as the player count
              increases, misunderstandings can arrise. current solutions for
              tennis courts are focused on scheduling private courts and don't
              consider the experience after getting in the court. with a close
              connection to this challenge, it made sense for us to use our city
              as a use case for our project.
            </p>
          </div>
          <Image src={Problem} className="problem-img" alt="courte-problem" />
        </div>
        <div className="overview">
          <div>
            <p className="overview-title">Overview of Courte</p>
            <p>Park list • Join line • Pairing</p>
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
      .problem {
        flex-direction: column;
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
    .problem {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 900px;
      gap: 2rem;

      .problem-title {
        letter-spacing: 1px;
        font-size: 12px;
        margin-bottom: 2rem;
        font-weight: 500;
        color: ${globalColor.grey10};
      }
      .p-disc {
        font-size: 20px;
        line-height: 30px;
        color: ${globalColor.grey100};
      }

      .problem-img {
        margin-top: 5rem;
        width: 500px;
        height: auto;
        border-radius: 20px;
      }
    }
    .howitwork {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100vw;
      gap: 2rem;
      background: #f5f5f5;

      .work-img {
        margin-top: 5rem;
        width: 200px;
        height: auto;
        border-radius: 20px;
      }
    }
  }
`;

export default Courte;
