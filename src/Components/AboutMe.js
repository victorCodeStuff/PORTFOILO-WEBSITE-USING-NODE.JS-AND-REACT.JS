import React from "react";
import myPhoto_1 from "./Photos/myphoto.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  return (
    <div className="aboutMe-container">
      <div id="leftLine">
        <div id="photo-name">
          <div id="myPhoto">
            <img src={myPhoto_1}></img>
          </div>
          <div className="name theme-text">
            <h1>
              Victor Hugo
            </h1>
          </div>
        </div>
      </div>
      <div id="rightLine">
        <div className="bio">
        <h3 className="theme-text text-language">
        FULL-STACK DEVELOPER BASED ON PALMAS, PARANÁ, BRAZIL.


              </h3>
        </div>
        <div className="techStack theme-text text-language">
          <h3>TECH STACK</h3>
          <div   className="techStack-icons">
            <div>
            <FontAwesomeIcon className="iconsContainer-aboutMe html" color="white" icon={faHtml5} />
            </div>
            <div>
            <FontAwesomeIcon className="iconsContainer-aboutMe css" color="white" icon={faCss3} />
            </div>
            <div>
            <FontAwesomeIcon className="iconsContainer-aboutMe js"   color="white" icon={faJs} />
            </div>
            <div>
            <FontAwesomeIcon className="iconsContainer-aboutMe react"  color="white" icon={faReact} />
            </div>
            <div>
            <FontAwesomeIcon className="iconsContainer-aboutMe nodejs" scale={1} color="white" icon={faNodeJs} />
            </div>
          </div>
        </div>
    </div>
  
      </div>
  );
};

export default AboutMe;
