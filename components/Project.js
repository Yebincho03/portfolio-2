import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { globalColor } from "../shared/Style";
import Website from "../public/thecompany-01.png";
import Courte from "../public/courte.png";
import Poster from "../public/poster.png";
import Picbeak from "../public/picbeak-image.png";
import Photo1 from "../public/photo-1.png";
import Photo2 from "../public/photo-2.png";
import Photo3 from "../public/photo-3.png";
import Aboutme from "../public/me.png";

const Project = () => {
  return (
    <Container>
      <div className="featureBox grid-1">
        <div className="wrapper-1 box">
          <Image className="box-img" src={Website} />
        </div>
        <p className="featureTitle p1">Immigration consulting website</p>
        <p className="featureSub p1">Web Design / 2022</p>
      </div>
      <div className="featureBox grid-2">
        <div className="wrapper-2 box">
          <Image className="box-img" src={Courte} />
        </div>
        <p className="featureTitle">Courte Application</p>
        <p className="featureSub">Front-developer / 2022</p>
      </div>
      <div className="featureBox grid-3">
        <div className="wrapper-3 box">
          <Image className="box-img3" src={Poster} />
        </div>
        <p className="featureTitle">Poster Design</p>
        <p className="featureSub">Graphic Design / 2022</p>
      </div>
      <div className="featureBox grid-4">
        <div className="wrapper-4 box">
          <Image className="box-img4" src={Picbeak} />
        </div>
        <p className="featureTitle p4">Picbeak Web Application</p>
        <p className="featureSub p4">Front-developer / 2022</p>
      </div>
      <div className="featureBox grid-5">
        <div className="wrapper-5 box">
          <Image className="box-img5 photo1" src={Photo1} />
          <Image className="box-img5 photo2" src={Photo2} />
          <Image className="box-img5 photo3" src={Photo3} />
        </div>
        <p className="featureTitle">Product Photography</p>
        <p className="featureSub">Visual Styling / 2022</p>
      </div>
      <div className="about-wrapper grid-6">
        <a href="#">
          <div className="button">
            <Image className="aboutme-small" src={Aboutme} />
            <span className="btn">About Me</span>
            <div class="button__drow"></div>
          </div>
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  margin-right: 1rem;
  margin-left: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 108px;
  grid-row-gap: 24px;
  height: 100vh;
  font-family: "outfit", sans-serif;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-row-gap: 100px;
    grid-column-gap: 0px;
    margin-top: 2rem;

    .grid-1,
    .grid-2,
    .grid-3,
    .grid-4,
    .grid-5,
    .grid-6 {
      grid-column: 1 / span 1;
    }

    .featureBox {
      justify-self: center;
    }
    .wrapper-1,
    .wrapper-2,
    .wrapper-3,
    .wrapper-4,
    .wrapper-5 {
      margin-top: 0rem !important;
    }
    .wrapper-1 {
      line-height: 33 !important;
    }
    .wrapper-2 {
      line-height: 40 !important;
    }
    .wrapper-3,
    .wrapper-4 {
      line-height: 35 !important;
    }
    .box {
      width: 350px !important;
      height: 350px !important;
    }
    .box-img,
    .box-img4 {
      width: 300px !important;
      height: auto !important;
    }
    .photo1,
    .photo3 {
      display: none;
    }
    .wrapper-1,
    .p1,
    .wrapper-4,
    .p4 {
      margin-left: 0rem !important;
    }

    .featureTitle,
    .featureSub {
      text-align: center;
    }
  }

  .grid-5,
  .grid-6 {
    grid-column: 1 / span 2;
  }

  .featureBox {
    justify-self: center;
    .p4 {
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
    .box-img {
      width: 400px;
      height: auto;
    }
    .wrapper-1 {
      margin-left: 2rem;
      margin-top: 2rem;
      width: 500px;
      height: 438px;
      line-height: 40;
      background: linear-gradient(180deg, #e4f2ff 0%, #d3e5ff 100%);
    }
    .p1 {
      margin-left: 2rem;
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
    }

    .wrapper-3 {
      margin-top: -7rem;
      width: 400px;
      height: 500px;
      line-height: 50;
      background: linear-gradient(35.32deg, #effeff -2.93%, #daf2ff 99.99%);
      .box-img3 {
        width: 260px;
        height: auto;
      }
    }

    .wrapper-4 {
      margin-left: -8rem;
      margin-top: 6rem;
      width: 500px;
      height: 300px;
      line-height: 33;
      background: linear-gradient(
        109.64deg,
        rgba(255, 246, 215, 0.62) 22.8%,
        rgba(211, 255, 220, 0.52375) 98.57%
      );
      .box-img4 {
        width: 350px;
        height: auto;
      }
    }

    .wrapper-5 {
      margin-top: 6rem;
      width: 1000px;
      height: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      background: linear-gradient(
        93.19deg,
        rgba(255, 240, 223, 0.6) 7.54%,
        rgba(236, 218, 255, 0.56) 98.33%
      );
      .box-img5 {
        width: 210px;
        height: 210px;
      }
    }
  }
  .about-wrapper {
    justify-self: center;
    text-align: center;

    .button {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10rem 0;
      position: relative;
      z-index: 0;

      .aboutme-small {
        width: 100px;
        height: 100px;
        mix-blend-mode: luminosity;
        margin: 1rem 0;
      }

      .button__drow {
        position: absolute;
        z-index: -1;
        border: 1rem;
        transform-origin: 1rem 1rem;
        top: 10rem;
        left: 10px;
        width: 2rem;
        height: 0;
        transform: rotate(-95deg);
        background: lightblue;
      }

      .btn {
        font-size: 50px;
        color: ${globalColor.grey100};
      }
    }
    .button:hover {
      transform: translateY(-0.6em);
      transition: transform 0.3s ease;
    }

    .button__drow::before {
      bottom: 0;
      left: 0;
      width: 0;
      height: 2rem;
      border-radius: 1rem;
      transform-origin: 1rem 1rem;
      transform: rotate(80deg);
    }

    .button__drow::after {
      top: -10px;
      left: 45px;
      width: 0;
      height: 2rem;
      border-radius: 1rem;
      transform-origin: 1rem 1rem;
      transform: rotate(71deg);
    }
    .button:hover .button__drow {
      animation: drow1 ease-in 0.06s;
      animation-fill-mode: forwards;
    }

    .button:hover .button__drow::before {
      animation: drow2 linear 0.08s 0.06s;
      animation-fill-mode: forwards;
    }

    .button:hover .button__drow::after {
      animation: drow3 linear 0.03s 0.14s;
      animation-fill-mode: forwards;
    }

    @keyframes drow1 {
      0% {
        height: 0;
      }

      100% {
        height: 200px;
      }
    }

    @keyframes drow2 {
      0% {
        width: 0;
        opacity: 0;
      }

      10% {
        opacity: 0;
      }

      11% {
        opacity: 1;
      }

      100% {
        height: 200px;
      }
    }

    @keyframes drow3 {
      0% {
        height: 0;
      }

      100% {
        height: 100px;
      }
    }
  }
`;

export default Project;
