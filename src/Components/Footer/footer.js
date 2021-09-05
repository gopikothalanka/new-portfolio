import React from 'react';
import './footer.css';
export default function footer() {
  return (
    <footer>
      <div className="person">
        <h1>Gopi Kothalanka</h1>
        <h3>Full Stack Developer</h3>
      </div>
      <div className="contact-info" id="me">
        <h2>Contact info</h2>
        <ul>
          <li>+91-7794899929</li>
          <li>kothalankagopi@gmail.com</li>
          <li>Rajahmundry, Andhra Pradesh, India, 533101</li>
        </ul>
      </div>
      <div className="social-links">
        <h2>Important links</h2>
        <ul>
          <li><a href="https://www.linkedin.com/in/gopi-kothalanka/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" ></i> linked in</a></li>
          <li><a href="https://www.instagram.com/gopi_kothalanka/" target="_blank" rel="noopener noreferrer">  <i className="fab fa-instagram" ></i> instagram</a></li>
          <li><a href="https://drive.google.com/file/d/11dcSIEkKth1mb6j-bNLyGUFu611qTTSM/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-download"></i>  Resume</a></li>
        </ul>
      </div>
    </footer>
  )
}
