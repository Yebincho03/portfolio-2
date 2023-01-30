import Image from "next/image";
import styled from "styled-components";
import React from "react";
import { globalColor } from "../shared/Style";

const Skill = () => {
  return (
    <Wrapper>
      <div className="skill">
        <div className="techSkill skill-box"></div>
        <div className="designSkill skill-box"></div>
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
    flex-direction: row;
    justify-content: center;
    gap: 2rem;

    .skill-box {
      width: 100%;
      height: 200px;
      border: 1px solid ${globalColor.grey10};
      border-radius: 20px;
    }
  }
`;

export default Skill;
