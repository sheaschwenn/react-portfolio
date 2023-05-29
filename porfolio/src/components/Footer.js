import React from "react";
import gitHub from "./../images/github-mark.png";
import linkedIn from './../images/icons8-linkedin-50.png'
import medium from './../images/icons8-medium-60.png'

function Footer() {
  return (
    <div>
      <a href="https://github.com/sheaschwenn">
        <img src={gitHub} alt="GitHub logo" />
      </a>
      <a href="https://www.linkedin.com/in/shea-schwennicke/">
        <img src={linkedIn} alt="linkedin logo" />
      </a>
      <a href="https://medium.com/@sheaschwenn">
        <img src={medium} alt="medium logo" />
      </a>
    </div>
  );
}

export default Footer;
