import Head from "next/head";
import Image from "next/image";
import Work from "../components/Work";
import styled from "styled-components";
import { globalColor } from "../shared/Style";
import Skill from "../components/Skill";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yebin Cho</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,500&family=Outfit:wght@300;400;500;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="./logo.png" />
      </Head>
      <Wrapper>
        <Header />
        <Work />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${globalColor.white};
`;
