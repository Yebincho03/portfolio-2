import styled from "styled-components";
import Image from "next/image";
import { globalColor } from "../shared/Style";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "../public/images/yebin-logo.png";

const Header = () => {
  const [name, setName] = useState([]);
  useEffect(() => {
    const pathname = window.location.href;
    const splitLocation = pathname.split("/");

    return () => {
      setName(splitLocation);
      console.log(splitLocation);
    };
  }, []);

  return (
    <Wrapper>
      <div className="menu">
        <Link href="/">
          <Image className="logo" src={Logo} />
        </Link>

        <div className="navigation-wrap">
          <span
            className={
              name[3] === "" ? "navigation-items active" : "navigation-items"
            }
          >
            <Link href="/">Work</Link>
          </span>
          <span
            className={
              name[3] === "about"
                ? "navigation-items active"
                : "navigation-items"
            }
          >
            <Link href="/about">About</Link>
          </span>
          <span
            className={
              name[3] === "resume"
                ? "navigation-items active"
                : "navigation-items"
            }
          >
            <Link
              href="https://drive.google.com/file/d/1JcA35L-W1mvpAm2BY7cRb1RYmsVmPJ9M/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Link>
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 15vh;
  display: flex;
  align-items: center;
  font-family: "outfit", sans-serif;
  font-weight: 500;

  .menu {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: ${globalColor.grey100};
    font-size: 18px;

    .logo {
      height: 45px;
      width: auto;
    }

    .navigation-wrap {
      display: flex;
      gap: 2rem;
      color: ${globalColor.grey10};
      align-items: center;
      span:hover {
        color: ${globalColor.primary};
        transform: translateY(-0.22em);
        transition: transform 0.5s ease;
      }
      .active {
        color: ${globalColor.primary};
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
