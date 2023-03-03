import styled from "styled-components";
import { globalColor } from "../shared/Style";
import Link from "next/link";
import { useState, useEffect } from "react";

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
          <span className="name">Yebin Cho</span>
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
              href="https://drive.google.com/file/d/1qdi1nnWJX6kZ4nQaq-NQoxlqDZ1UykSt/view?usp=sharing"
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
      span:hover {
        color: ${globalColor.grey100};
        transform: translateY(-0.22em);
        transition: transform 0.5s ease;
      }
      .active {
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
