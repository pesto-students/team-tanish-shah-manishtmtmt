import { useContext } from "react";
import { Fade } from "react-reveal";

import "./Skills.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { illustration, skillsSection } from "../../portfolio.";
import codingPerson from "../../assets/lottie/codingPerson";
import developerActivity from "../../assets/images/developerActivity.svg";
import DisplayLottie from "../../components/DisplayLottie/DisplayLottie";
import SoftwareSkills from "../../components/SoftwareSkills/SoftwareSkills";

export const Skills = () => {
  const { isDark } = useContext(ThemeContext);

  if (!skillsSection.display) return null;

  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img alt="Man Working" src={developerActivity} />
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode sutTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkills />
            <div className="skills-text-container">
              {skillsSection.skills.map((skill, i) => (
                <p
                  key={i}
                  className={
                    isDark
                      ? "dark-mode sutTitle skills-text"
                      : "sutTitle skills-text"
                  }
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
