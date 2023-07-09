import Link from "next/link";
import Image from "next/image";
import Header from "./Header.js";
import styled from "styled-components";
import { globalColor } from "../shared/Style";
import Website from "../public/images/thecompany-01.png";
import Courte from "../public/images/courte-cover.jpg";
import Poster from "../public/images/poster.png";
import Picbeak from "../public/images/picbeak-cover.jpg";

const Project = () => {
  return (
    <Container>
      <Header />
      <div className="page-container">
        <div className="headline">
          <h1 className="title"> Hi there, I'm Yebin</h1>
          <p>
            A UX/UI designer and Front-end developer passionate about solving
            user problems and creating inclusive experiences. Studied Web and
            Mobile app design and development @ Langara College.
          </p>
        </div>
        <a href="#section-1">
          <div className="btn-wrapper">
            <div className="btn">Dive in</div>
          </div>
        </a>
        <div className="projects-container" id="section-1">
          <div className="item">
            <Image className="box" src={Website}></Image>
            <div className="project-name">
              <p>Consulting agency Responsive Web</p>
              <span>Improved UI/UX on landing page.</span>
            </div>
          </div>
          <div className="item">
            <Link href="/courte" className="link">
              <Image className="box" src={Courte}></Image>
              <div className="project-name">
                <p>Courte app</p>
                <span>
                  An app offers a comprehensive solution to facilitate the use
                  and sharing of public tennis courts.
                </span>
              </div>
            </Link>
          </div>
          <div className="item">
            <Link href="/picbeak">
              <Image className="box" src={Picbeak}></Image>
              <div className="project-name">
                <p>Picbeak web app</p>
                <span>
                  Web app that provides educational information about bird
                  species.
                </span>
              </div>
            </Link>
          </div>
          <div className="item">
            <Image className="box" src={Picbeak}></Image>
            <div className="project-name">
              <p>Courte App</p>
              <span>appp</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: auto;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 1200px;
  color: black;

  .headline {
    .title {
      color: ${globalColor.primary};
      font-weight: 800;
      font-size: 42px;
      margin: 2rem 0;
    }
    p {
      font-size: 24px;
      line-height: 40px;
      font-weight: 600;
    }
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin: 5rem 0;
  }
  .btn {
    background: ${globalColor.primary};
    border-radius: 50px;
    width: 170px;
    text-align: center;
    padding: 20px 20px;
    color: white;
    font-size: 20px;
  }

  .btn:hover {
    box-shadow: 8px 8px #99bdff;
    transition: 0.3s;
  }

  .projects-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    width: 1200px;

    .item {
      width: 100%;
      cursor: pointer;

      .project-name {
        padding: 20px 0;
        p {
          font-size: 21px;
          line-height: 29px;
          padding-bottom: 10px;
          font-weight: 600;
          color: ${globalColor.primary};
        }
        span {
          font-size: 20px;
          line-height: 32px;
        }
      }

      .box {
        width: 100%;
        height: auto;
        border-radius: 20px;
      }
    }
  }
`;

export default Project;
