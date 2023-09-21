import { skillsSection } from "../../portfolio.";
import './SoftwareSkills.scss'

export default function SoftwareSkills() {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {skillsSection.softwareSkills.map((skill, i) => (
          <li className="software-skill-inline" key={i} name={skill.skillName}>
            <i className={skill.fontAwesomeClassname}></i>
            <p>{skill.skillName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
