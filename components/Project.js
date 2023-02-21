import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { globalColor } from "../shared/Style";
import Website from "../public/thecompany-01.png";
import Courte from "../public/courte.png";

const Project = () => {
  return (
    <Container>
      <div className="featureBox">
        <div className="wrapper-1 box">
          <Image className="box-img" src={Website} />
        </div>
        <p className="featureTitle">Immigration consulting website</p>
        <p className="featureSub">Web Design / 2022</p>
      </div>
      <div className="featureBox">
        <div className="wrapper-2 box">
          <Image className="box-img2" src={Courte} />
        </div>
        <p className="featureTitle">Courte Application</p>
        <p className="featureSub">Front-developer / 2022</p>
      </div>
      <div className="featureBox">
        <div className="wrapper-3 box">
          <Image className="box-img3" />
        </div>
        <p className="featureTitle">Poster Design</p>
        <p className="featureSub">Graphic Design / 2022</p>
      </div>
      <div className="featureBox">
        <div className="wrapper-4 box">
          <Image className="box-img4" />
        </div>
        <p className="featureTitle box4">Picbeak Web Application</p>
        <p className="featureSub box4">Front-developer / 2022</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  margin-right: auto;
  margin-left: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  grid-column-gap: 108px;
  grid-row-gap: 24px;
  height: 100vh;
  font-family: "outfit", sans-serif;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    grid-row-gap: 100px;

    .featureBox {
      justify-self: center;
    }
    .wrapper-2,
    .wrapper-4 {
      margin-top: 0rem !important;
    }
    .wrapper-4,
    .box4 {
      margin-left: 0rem !important;
    }

    .featureTitle,
    .featureSub {
      text-align: center;
    }
  }

  .featureBox {
    .box4 {
      margin-left: -8rem;
    }

    .box {
      box-shadow: 0 4px 10px 0 rgb(0 0 0 / 5%);
      border-radius: 50px;
      text-align: center;
    }
    .box:hover {
      transform: translateY(-0.6em);
      transition: transform 0.3s ease;
    }
    .wrapper-1 {
      margin-top: 2rem;
      width: 500px;
      height: 438px;
      line-height: 40;
      background: linear-gradient(180deg, #e4f2ff 0%, #d3e5ff 100%);
      .box-img {
        width: 400px;
        height: auto;
      }
    }
    .featureTitle {
      padding-top: 10px;
      font-size: 20px;
      font-weight: 500;
      color: ${globalColor.grey100};
    }
    .featureSub {
      padding-top: 8px;
      color: ${globalColor.grey10};
      font-size: 17px;
      font-weight: 300;
    }

    .wrapper-2 {
      margin-top: 12rem;
      width: 400px;
      height: 470px;
      line-height: 55;
      background: linear-gradient(180deg, #ff8787 -11.49%, #ffcc80 118.3%);
      .box-img2 {
        width: 400px;
        height: auto;
      }
    }

    .wrapper-3 {
      width: 360px;
      height: 470px;
      line-height: 55;
      background: linear-gradient(35.32deg, #effeff -2.93%, #daf2ff 99.99%);
      .box-img3 {
        width: 400px;
        height: auto;
      }
    }
    .wrapper-4 {
      margin-left: -8rem;
      margin-top: 5rem;
      width: 500px;
      height: 300px;
      line-height: 55;
      background: linear-gradient(
        109.64deg,
        rgba(255, 246, 215, 0.62) 22.8%,
        rgba(211, 255, 220, 0.52375) 98.57%
      );
      .box-img4 {
        width: 400px;
        height: auto;
      }
    }
  }
`;

export default Project;
