import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const ProjectsContainer = () => {
  return (
   <>
    <div className="projects-container theme">
      <div className="projectsIMG theme"></div>
      <div className="projectsTitle-Desc">
        <h3> Projects Example</h3>
        <div className="projectsDesc">
          <p>ProjectDesc</p>
        </div>
        <div className="techStack-projects">
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects html"
              color="white"
              icon={faHtml5}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects css"
              color="white"
              icon={faCss3}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects js"
              color="white"
              icon={faJs}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects react"
              color="white"
              icon={faReact}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects nodejs"
              scale={1}
              color="white"
              icon={faNodeJs}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="projects-container-reverse theme">
      <div className="projectsIMG theme"></div>
       <div className="projectsTitle-Desc">
        <h3> Projects Example</h3>
        <div className="projectsDesc">
          <p>ProjectDesc</p>
        </div>
        <div className="techStack-projects">
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects html"
              color="white"
              icon={faHtml5}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects css"
              color="white"
              icon={faCss3}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects js"
              color="white"
              icon={faJs}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects react"
              color="white"
              icon={faReact}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects nodejs"
              scale={1}
              color="white"
              icon={faNodeJs}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="projects-container theme">
      <div className="projectsIMG theme"></div>
      <div className="projectsTitle-Desc">
        <h3> Projects Example</h3>
        <div className="projectsDesc">
          <p>ProjectDesc</p>
        </div>
        <div className="techStack-projects">
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects html"
              color="white"
              icon={faHtml5}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects css"
              color="white"
              icon={faCss3}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects js"
              color="white"
              icon={faJs}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects react"
              color="white"
              icon={faReact}
            />
          </div>
          <div>
            <FontAwesomeIcon
              className="iconsContainer-projects nodejs"
              scale={1}
              color="white"
              icon={faNodeJs}
            />
          </div>
        </div>
      </div>
    </div>
   </>
    
  );
};

export default ProjectsContainer;
