import React from "react";


import collage_main from "../../logos/collahe.jpg";
import "./project2.css";
const Project2 = () => {
  return (
    <div className="project-container">
      <h1>
        <span className="project-head">P</span>ROJECTS
      </h1>
      <div className="project-cards">
        <div className="project-card">
         
          <img src={collage_main} alt="" />
          <h5>Collage </h5>
          <div className="desc">
            This is an Fully functional  web app built
            using  Reactjs and Nodejs .
          </div>
          <div className="projectopen">
            <a
              rel="noopener noreferrer"
              href="https://github.com/Suraj-1233/collage"
              target={"_blank"}
            >
              Github
            </a>
            
            <a
              rel="noopener noreferrer"
              href="/#"
              target={"_blank"}
            >
              Live Demo
            </a>
          </div>
        </div>
        
      </div>
      <div className="scroll">Scroll &#62;&#62;</div>
    </div>
  );
};

export default Project2;
