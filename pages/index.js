import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Hero from "../components/Hero";
import SideBar from "../components/SideBar";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yebin's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <SideBar />
        <div>
          <Hero />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
`;
