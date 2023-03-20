import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/burak.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="avatar" className="profile-image" />
      <h1 className="profile-text">Hi I am Burak Özdemİr</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This project is created for my development{" "}
      </h4>
      <div className="profile-links">
        <a href="https://github.com/ozdemirburakk">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/burakozdmr/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
