import Image from "next/image";
import styled from "styled-components";
import React from "react";
import { globalColor, SectionTitle } from "../shared/Style";
import designIcons from "../public/data/designIcons.json";
import developmentIcons from "../public/data/developmentIcons.json";
import SkillItem from "./SkillItem";

const Skill = () => {
  return (
    <Wrapper>
      <div className="skill">
        <div className="techSkill skill-box">
          <div className="designTitle box-title">
            Design
            <span> Tools I Use</span>
          </div>
          <div className="toolWrapper">
            <SkillWrapper>
              {designIcons.map((icon, i) => (
                <SkillItem key={i} icon={icon.link} alt={icon.alt} />
              ))}
            </SkillWrapper>
          </div>
        </div>
        <div className="designSkill skill-box">
          <div className="developmentTitle box-title">
            Development
            <span> Tools I Use</span>
          </div>
          <div className="toolWrapper">
            <SkillWrapper>
              {developmentIcons.map((icon, i) => (
                <SkillItem key={i} icon={icon.link} alt={icon.alt} />
              ))}
            </SkillWrapper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  padding: 3rem 2rem;

  .skill {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    @media screen and (min-width: 430px) {
      display: flex;
      flex-direction: row;
    }

    .skill-box {
      width: 100vw;
      height: auto;
      border: 1px solid ${globalColor.grey10};
      border-radius: 20px;
      text-align: center;
      font-family: "Outfit", sans-serif;
      font-size: 20px;
      font-weight: 400;
      padding: 2rem;

      span {
        color: ${globalColor.grey10};
      }
    }
  }
`;

const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin-top: 2vh;
  flex-wrap: wrap;
  @media screen and (min-width: 800px) {
    padding: 1em;
    max-width: 830px;
  }
`;

export default Skill;
