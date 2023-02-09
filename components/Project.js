import Image from "next/image";
import styled, { keyframes } from "styled-components";

const Project = (props) => {
  const { icon, alt } = props;

  return (
    <Container>
      <div className="wrapper"></div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    border: 1pm solid white;
  }
`;

export default Project;
