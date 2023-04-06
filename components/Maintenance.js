import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import React from "react";
import Header from "../components/Header";
import { gsap } from "gsap";
import { useState, useEffect } from "react";
import { globalColor, DescriptiveText } from "../shared/Style";
import GithubIcon from "../public/icons/github.js";
import Linkedin from "../public/icons/linkedin.js";
import Behance from "../public/icons/behance.js";

const Maintenance = () => {
  return (
    <Wrapper>
      <div className="body">
        <div className="content">
          <h1 className="title">Making Improvements</h1>
          <h5 className="subtitle">More Exciting Changes to Come</h5>
          <Link href="/about">
            <div className="button">
              <span className="btn">About me</span>
            </div>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .body {
    height: 100vh;
    width: 100vw;
    background-image: url("../images/maintenance-Img.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: white;

    .content {
      display: flex;
      flex-direction: column;
      margin: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin: 0 10rem;
      .title {
        font-size: 48px;
        line-height: 60px;
      }
      .subtitle {
        font-size: 20px;
        line-height: 26px;
        font-weight: 300;
      }
      .button {
        width: 140px;
        margin: 2rem 0;
        padding: 16px 26px;
        border: 1px solid white;
        border-radius: 50px;
        text-align: center;
      }
      .button:hover {
        background-color: #03254c;
        border: 1px solid #03254c;
      }
    }
  }
`;

export default Maintenance;
