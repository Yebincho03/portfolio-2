import Head from "next/head";
import styled from "styled-components";
import { globalColor } from "../shared/Style";
import Project from "../components/Project";
import Maintenance from "../components/Maintenance";

export default function Home() {
  return (
    <Contanier>
      <Head>
        <title>Yebin Cho</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,500&family=Outfit:wght@300;400;500;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <Wrapper>
        <Maintenance />
      </Wrapper>
    </Contanier>
  );
}
const Contanier = styled.div`
  margin: 0;
  padding: 0;
`;
const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${globalColor.white};
`;
