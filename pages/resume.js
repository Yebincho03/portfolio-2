import Link from "next/link";
import { globalColor, SectionTitle, DescriptiveText } from "../shared/Style";
import styled from "styled-components";
import Image from "next/image";
import Header from "../components/Header";
import ResumeImage from "../public/images/yebinCho-resume.jpg";

function Resume() {
  return (
    <Container>
      <ImageContainer>
        <Header />
        <Image
          className="image"
          src={ResumeImage}
          objectFit={"cover"}
          quality={100}
          alt="resume"
        />
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .image {
    width: 900px;
    height: auto;
  }
`;

export default Resume;
