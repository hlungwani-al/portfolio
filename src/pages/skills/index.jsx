import React from "react";
import { GiSkills } from "react-icons/gi";
import PageHeaderContent from "../../components/pageheader";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import "./styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="Dev Skills"
        icon={<GiSkills size={40} />}
      />
      <div className="skills-content-wrapper">
        {skillsData.map((item, index) => (
          <div key={index} className="skills-content-wrapper-innerContent">
            <Animate
              play
              duration={1.5}
              delay={0}
              start={{
                transform: "translatex(-400px)",
              }}
              end={{
                transform: "translatex(0px)",
              }}
            >
              <h3 className="skills-content-wrapper-innerContent-categoryText">
                {item.label}
              </h3>
              {item.data.map((skillItem, j) => (
                <AnimateKeyframes
                  play
                  duration={1.5}
                  delay={0}
                  keyframes={["opacity:1", "opacity, 0"]}
                  iterationCount="1"
                >
                  <div className="skillname-wrapper" key={j}>
                    <p>{skillItem.skillsName}</p>
                  </div>
                </AnimateKeyframes>
              ))}
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
