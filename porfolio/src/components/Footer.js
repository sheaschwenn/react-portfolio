import React from "react";
import gitHub from './../images/icons8-github-60.png';
import linkedIn from './../images/icons8-linkedin-50.png'
import medium from './../images/icons8-medium-60.png'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/sheaschwenn">
        <img src={gitHub} alt="GitHub logo" />
      </a>
      <a href="https://www.linkedin.com/in/shea-schwennicke/">
        <img src={linkedIn} alt="linkedin logo" />
      </a>
      <a href="https://medium.com/@sheaschwenn">
        <img src={medium} alt="medium logo" />
      </a>
    </footer>
  );
}

export default Footer;
