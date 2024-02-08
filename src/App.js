import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import InputForm from "./Components/InputForm.js";
import NavBar from "./Components/NavBar.js";
import AboutMe from "./Components/AboutMe.js"
import SocialMedias from "./Components/SocialMedias.js";
import ProjectsContainer from "./Components/ProjectsContainers/ProjectsContainer.js";
import CodeSnippets from "./Components/codesnippets.js";
import MySection from "./Components/mySection.js"; 

import React, {  useEffect } from 'react';
import changeStyles from "./Components/jsFiles/themeChanger.js";
import languageChanger from "./Components/jsFiles/languageChanger.js";
function App () {
  useEffect(()=>{
    changeStyles();
    languageChanger();
  }, [])


  return (
    <>
    <header>
        <nav>
          <NavBar/>
        </nav>
       
        <main>
          <section>
            <AboutMe/>
          </section>
          <section>
            <div id="projectsFlexDiv" >
              <h1 className="theme-text"> Projects</h1>
          <ProjectsContainer/>     
   
            </div>
          </section>
          <section id="snippetSection">
            <CodeSnippets/>
          </section>
          <section >
            <MySection/>
          </section>
          <section>
            <InputForm/>
          </section>
        </main>
        
      </header>
      <footer>
        <div id="contact">
          
        </div>
        <div id="socialMedias">
        <SocialMedias/>
        </div>
        </footer>
  

      
    </>
  );
}
export default App;
