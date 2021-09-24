import React from 'react';
import './education.css'

export default function education() {
  return (
    <div className="skillSet">

      <div className="skills" id="skills">
        <h1>Skils</h1>
      <ul>
        <li> 
          <h3>HTML</h3>
        <div class="progressBarContainer"> <div class="progressBarValue value-90"><p>90%</p></div></div>
         </li>
         <li> 
          <h3>css</h3>
          <div class="progressBarContainer"> <div class="progressBarValue value-80"><p>80%</p></div></div>
         </li>
         <li> 
          <h3>Bootstrap</h3>
          <div class="progressBarContainer"> <div class="progressBarValue value-30"><p>30%</p></div></div>
         </li>
         <li> 
          <h3>java script</h3>
          <div class="progressBarContainer"> <div class="progressBarValue value-70"><p>70%</p></div></div>
         </li>
         <li> 
          <h3>React js</h3>
          <div class="progressBarContainer"> <div class="progressBarValue value-50"><p>50%</p></div></div>
         </li>
      </ul>
      </div>

      <div className="education" id="education">
        <h1>Education</h1>
        <ul>
          <li><span><i className="fas fa-graduation-cap"></i>Computer Science Engineer (B.tech)</span><span>Lenora College of Engineering, Rampachodavaram</span><span>55%</span></li>
          <li><span><i className="fas fa-graduation-cap"></i>Electronics & communication Engineer (Diploma) </span><span>LKBP, Ravulapalem </span><span>59.5%</span></li>
          <li><span><i className="fas fa-graduation-cap"></i>SSC (10th)</span><span>NNT Public School, Rajahmundry </span><span>50%</span></li>
        </ul>
      </div>
    </div>
  )
}
