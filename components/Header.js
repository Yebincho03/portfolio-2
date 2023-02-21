import Image from "next/image";
import styled from "styled-components";
import React from "react";
import { globalColor } from "../shared/Style";

const Header = () => {
  return (
    <Wrapper>
      <div className="menu">
        <a href="#">
          <span className="name">Yebin Cho</span>
        </a>

        <div className="navigation-wrap">
          <a href="#">
            <span className="navigation-items">About</span>
          </a>
          <a href="#">
            <span className="navigation-items">Work</span>
          </a>
          <a href="#">
            <span className="navigation-items">Resume</span>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 10vh;
  display: flex;
  align-items: center;
  font-family: "outfit", sans-serif;
  font-weight: 500;

  .menu {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: ${globalColor.grey100};
    font-size: 15px;
    padding: 0 2rem;

    .navigation-wrap {
      display: flex;
      gap: 2rem;
      color: ${globalColor.grey10};
      a:hover {
        color: ${globalColor.grey100};
        transform: translateY(-0.22em);
        transition: transform 0.5s ease;
      }
      a:active {
        color: ${globalColor.grey100};
      }
    }
    @media (max-width: 653px) {
      .navigation-wrap {
        gap: 1rem;
      }
    }
  }
`;

export default Header;
