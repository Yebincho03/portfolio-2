import styled from "styled-components";

export const globalColor = {
  grey100: "#212121",
  grey10: "#7a7a7a",
  white: "#FFFFFF",
  primary: "#6096fd",
  secondary: "#74FAC0",
};

export const SectionTitle = styled.h3`
  color: ${globalColor.grey10};
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  font-family: "Outfit", sans-serif;
  @media screen and (min-width: 800px) {
    font-size: 25px;
  }
`;

export const HeadLine = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: ${globalColor.white};
  line-height: 35px;
  margin: 0;
  @media screen and (min-width: 800px) {
    font-size: 38px;
    font-weight: 600;
    color: ${globalColor.white};
    line-height: 40px;
    margin: 0;
  }
`;

export const ProjectText = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${globalColor.white};
  line-height: 40px;
  margin: 0;
  @media screen and (min-width: 800px) {
    font-size: 20px;
    font-weight: 500;
    color: ${globalColor.white};
    line-height: 40px;
    margin: 0;
  }
`;

export const DescriptiveText = styled.p`
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 25px;
  color: ${globalColor.white};
  margin: 0;
`;
