import React from 'react';
import './education.css'

export default function education() {
  return (
    <div className="skillSet">

      <div className="skills" id="skills"><h1>Skils</h1></div>

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
