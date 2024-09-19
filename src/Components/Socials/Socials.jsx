import React from "react";
import linkedIn from "../../assets/linked_in.png";
import styles from "./Socials.module.css";
import githublogo from "../../assets/github-mark-white.svg";

function Socials() {
  return (
    <div className={styles.socialstyle}>
      <p>Created by Michael LeMoine</p>

      <a
        href="http://www.linkedin.com/in/michaellemoine/"
        target="_blank"
        className={`fa fa-linkedin ${styles.fa}`}
      ></a>
      <a href="https://github.com/mlemoine28" target="_blank">
        <img
          src={githublogo}
          className={styles.githubstyle}
          alt="GitHub Logo"
        />
      </a>
    </div>
  );
}

export default Socials;
