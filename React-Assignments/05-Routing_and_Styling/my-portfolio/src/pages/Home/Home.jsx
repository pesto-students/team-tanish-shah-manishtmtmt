import { useContext } from "react";
import { Fade } from "react-reveal";
import TypeWriterComponent from "typewriter-effect";
import emoji from "react-easy-emoji";

import "./Home.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { greeting, illustration } from "../../portfolio.";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import Button from "../../components/Button/Button";
import DisplayLottie from "../../components/DisplayLottie/DisplayLottie";
import landingPerson from "../../assets/lottie/dev.json";

export const Home = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <Fade bottom duration={1000} distance={"40px"}>
      <div className='greet-main' id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {greeting.title}
                <span className="wave-emoji">{emoji("👋")}</span>
                {greeting.prefix}
                <TypeWriterComponent
                  options={{
                    strings: [
                      `${greeting.username}`,
                      "a Frontend Developer",
                      "a Backend Developer",
                      "a Fullstack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};
