import React from "react";


import collage_main from "../../logos/intership.png";
import "./project2.css";
const Intership = () => {
  return (
    <div className="project-container">
      <h1>
        <span className="project-head">I</span>NTERSHIP
      </h1>
      <div className="project-cards">
        <div className="project-card">
         
          <img src={collage_main} alt="" />
          <h5>SDE INTERN</h5>
          <div className="desc">
          Worked under Aman Vishvakarma of Namaste India,<br></br>
           I was
responsible for creating and maintaining the front-end of
the websites <br></br>,At Namaste India, I headed a team of 7 interns, <br></br> where we
succesfully created a user interactive website
          </div>
          <div className="projectopen">
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/namasteindiaorg/mycompany/"
              target={"_blank"}
            >
             Linkedin
            </a>
            
          </div>
        </div>
        
      </div>
      <div className="scroll">Scroll &#62;&#62;</div>
    </div>
  );
};

export default Intership;
