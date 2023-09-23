import { Fade } from "react-reveal";

import "./Contact.scss";
import { contactInfo, illustration } from "../../portfolio.";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import DisplayLottie from "../../components/DisplayLottie/DisplayLottie";
import contact from "../../assets/lottie/contact.json";
import contactMailDark from "../../assets/images/contactMailDark.svg";

export const Contact = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <Fade top duration={1000}>
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading contact-title"
                  : "heading contact-title"
              }
            >
              {contactInfo.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={contact} />
            ) : (
              <img src={contactMailDark} alt="Man working" />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};
