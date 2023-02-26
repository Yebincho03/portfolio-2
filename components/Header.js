import Image from "next/image";
import styled from "styled-components";
import React from "react";
import { globalColor } from "../shared/Style";
import Link from "next/link";

const Header = () => {
  return (
    <Wrapper>
      <div className="menu">
        <Link href="/">
          <span className="name">Yebin Cho</span>
        </Link>

        <div className="navigation-wrap">
          <Link href="/about">
            <span className="navigation-items">About</span>
          </Link>
          <Link href="/">
            <span className="navigation-items">Work</span>
          </Link>
          <Link href="/resume">
            <span className="navigation-items">Resume</span>
          </Link>
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
