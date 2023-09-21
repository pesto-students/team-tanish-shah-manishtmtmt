import { useContext } from "react";
import { Fade } from "react-reveal";

import "./Project.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { projects } from "../../portfolio.";

export const Project = () => {
  const { isDark } = useContext(ThemeContext);

  const openUrlInNewTab = (url) => {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  };

  if (!projects.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1
            className={isDark ? "dark-mode skills-heading" : "skills-heading"}
          >
            {projects.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {projects.subtitle}
          </p>
          <div className="projects-container">
            {projects.projects.map((project, i) => (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
              >
                {project.image ? (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="card-image"
                    />
                  </div>
                ) : null}
                <div className="project-detail">
                  <h5
                    className={isDark ? "dark-mode card-title" : "card-title"}
                  >
                    {project.projectName}
                  </h5>
                  <p
                    className={
                      isDark ? "dark-mode card-subtitle" : "card-subtitle"
                    }
                  >
                    {project.projectDesc}
                  </p>
                  {project.footerLink ? (
                    <div className="project-card-footer">
                      {project.footerLink.map((link, i) => (
                        <span
                          key={i}
                          className={
                            isDark ? "dark-mode project-tag" : "project-tag"
                          }
                          onClick={() => openUrlInNewTab(link.url)}
                        >
                          {link.name}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
};
