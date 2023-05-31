import Link from "next/link";
import Image from "next/image";
import Header from "./Header.js";
import styled from "styled-components";
import { globalColor } from "../shared/Style";
import Website from "../public/images/thecompany-01.png";
import Courte from "../public/images/courte.png";
import Poster from "../public/images/poster.png";
import Picbeak from "../public/images/picbeak-image.png";

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
        <div className="btn-wrapper">
          <div className="btn">Dive in</div>
        </div>
        <div className="projects-container">
          <div className="box box1">
            <div>
              <Image src={Website} className="image" />
            </div>
          </div>
          <div className="box box2">
            <div>
              <Image src={Courte} className="image" />
            </div>
          </div>
          <div className="box box3">
            <div>
              <Image src={Picbeak} className="image" />
            </div>
          </div>
          <div className="box box4">
            <div>
              <Image src={Poster} className="image" />
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
  width: 1000px;
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
      line-height: 34px;
      font-weight: 500;
    }
  }
  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin: 4rem 0;
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
    gap: 30px;
    width: 1000px;

    .box {
      background: #f5f5f5;
      width: 100%;
      height: 300px;
      border-radius: 30px;

      .image {
        width: 300px;
        height: auto;
      }
    }
  }
`;

export default Project;
