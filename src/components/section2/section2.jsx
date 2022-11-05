import "./section2.css";

const Section2 = () => {
  return (
    <div className="sec2box">
      <h1>
        <span className="abouthead">A</span>bout
        <span className="abouthead"> M</span>e
      </h1>
      <div className="textbox2">
        <p>
          My name is Suraj Kannujiya . I am an Hardworking  Information Technology Engineer. I Am Persuing B-Tech from National Institute of Technology,
           Srinagar. I am a MERN Stack Web Developer
          and Programmer . I have good Communication skills in Both English and
          Hindi languages . I am Tech enthusiast and a quick learner and problem
          solver.
        </p>

        <div className="edubox">
          <h2 className="eduhead">Education</h2>
          <div className="educontent">
            <div className="educard">
              <h3>High School - 10th</h3>
              <ul>
                <li>
                <b>Board</b>- State board UP , LUCKNOW.
                </li>
                <li>
                  <b>School</b> - RKS INTER COLLAGE ,
                  JAUNPUR.
                </li>
                <li>
                  <b>Percentage</b> - 79% .
                </li>
                <li>
                  <b>Year</b> - 2016 .
                </li>
              </ul>
            </div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="educard">
              <h3>Higher Secondary -12th</h3>
              <ul>
                <li>
                  <b>Board</b>- State board UP , LUCKNOW.
                </li>
                <li>
                  <b>School</b> - SARASWATI BALIKA HS BHANNOUR JAUNPUR
                  churhat.
                </li>
                <li>
                  <b>Percentage</b> - 65%.
                </li>
                <li>
                  <b>Year</b> - 2018.
                </li>
              </ul>
            </div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="educard">
              <h3>B-Tech</h3>
              <ul>
                <li>
                 
                </li>
                <li>
                  <b>College</b> -  National Institute of Technology, Srinagar
                  
                </li>
                <li>
                  <b>CGPA</b> - 7.25.
                </li>
                <li>
                  <b>Year</b> -from 2019 to 2023
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
