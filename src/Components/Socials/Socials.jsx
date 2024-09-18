import React from "react";
import linkedIn from "../../assets/linked_in.png";
import styles from "./Socials.module.css";
import githublogo from "../../assets/github-mark-white.svg"

function Socials() {
  return (
    <div className={styles.socialstyle}>
      <p>Created by Michael LeMoine</p>

      <a href="#" className={`fa fa-linkedin ${styles.fa}`}></a>
      <img src={githublogo} className={styles.githubstyle}></img>
    </div>
  );
}

export default Socials;
