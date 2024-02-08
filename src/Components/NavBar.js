import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className='navBar theme'>
      <div className='navBar-section1'>
        <h1>&lt;victorcodestuff/&gt;</h1>
        
      </div>

      <div className='navBar-section2'>
        <button><p>CONTACT</p></button>
        <button><p>CV</p></button>
        <div className="downzidedIconsNav">
        <button>          
          <FontAwesomeIcon className="navDownzidedIcon" color="white" icon={faGithub} />
        </button>
        <button>
        <FontAwesomeIcon className="navDownzidedIcon" color="white" icon={faLinkedinIn} />
        </button>
        <button>
        <FontAwesomeIcon className="navDownzidedIcon"  color="white" icon={faLanguage} />
        </button>
        
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
