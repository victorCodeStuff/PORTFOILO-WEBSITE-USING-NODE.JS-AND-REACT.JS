import React from "react";
import Myphoto2 from "./Photos/myphoto2.jpg"

const MySection = () =>{
    return (
        <>
    <div id='mySection'>
       <div className="mySection-container theme">
       
            <img  src={Myphoto2}/>
       
        <div id="text-mySection">
            <p className="mySectionLanguage">
             I'm Victor, a dedicated Full Stack Developer proficient
             in<strong id="underlineText-mySection"> HTML, CSS, JavaScript, 
             React, and Node.js</strong> since starting my programming journey 
             in 2023. Currently pursuing an Information Systems degree, I blend 
             academic knowledge with practical web development experience. In web 
             development, I excel in HTML for structure, CSS for styling, and JavaScript 
             for interactivity. Specializing in React, I create modern, responsive user interfaces,
             while on the server-side, I leverage Node.js for scalable and robust back-end systems,
             handling tasks like crafting APIs and managing server logic.
            </p>

        </div>
       </div>
    </div>
        </>

    )
}
export default MySection;