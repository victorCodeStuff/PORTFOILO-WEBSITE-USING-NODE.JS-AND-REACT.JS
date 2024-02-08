import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const SocialMedias = () => {
  
  return (
    <>
      <div id="socialMedias">
        <a className="buttonsSocialMedias" href="https://github.com/victorCodeStuff" target="_blank">
          <FontAwesomeIcon id="gitIcon" color="white" icon={faGithub} />
        </a>
        <a className="buttonsSocialMedias" href="https://www.linkedin.com/in/victor-hugo-da-mendes-a28b98240" target="_blank">
          <FontAwesomeIcon
            id="linkedInIcon"
            color="white"
            icon={faLinkedinIn}
          />
        </a>
        <button className="buttonsSocialMedias" id="modeChangerButton">
          <FontAwesomeIcon id="modeChangerIcon" color="white" icon={faMoon} />
        </button>
        <button className="buttonsSocialMedias">
          <FontAwesomeIcon
            id="languageChanger"
            color="white"
            icon={faLanguage}
          />
        </button>

      
      </div>
    </>
  );
};
export default SocialMedias;
