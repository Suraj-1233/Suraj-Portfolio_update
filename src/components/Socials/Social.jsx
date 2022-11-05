import React from "react";
import "./social.css";
import Linkedin from "../../logos/linkedin-logo-png-2026.png";
import Insta from "../../logos/instalogo.png";
import Codechef from "../../logos/codechef.png";

import Github from "../../logos/github.png";

const Social = () => {
  return (
    <div className="socialbox">
      <div className="rightsocial">
        <h1 className="headcolor">
          <span className="headcapital">O</span>nline
          <span className="headcapital"> P</span>resence /{" "}
          <span className="headcapital"> S</span>ocials
        </h1>
      </div>
      <div className="leftsocial">
        <div className="socialcard">
          <img src={Linkedin} alt="" />
          <a
            href="https://www.linkedin.com/in/surajkannujiya/"
            target={"_blank"}
            rel="noreferrer"
          >
            Linkedin
          </a>
        </div>
        <div className="socialcard">
          <img src={Insta} alt="" />
          <a
            href="https://www.instagram.com/suraj.6599/"
            target={"_blank"}
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="socialcard">
          <img src={Codechef} alt="" />
          <a
            href="https://www.codechef.com/users/zeptox"
            target={"_blank"}
            rel="noreferrer"
          >
            CodeChef
          </a>
        </div>
       
        <div className="socialcard">
          <img src={Github} alt="" />
          <a
            href="https://github.com/Suraj-1233"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
