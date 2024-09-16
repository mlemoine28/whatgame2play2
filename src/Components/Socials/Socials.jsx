import React from "react";
import linkedIn from "../../assets/linked_in.png";
import styles from "./Socials.module.css";

function Socials() {
  return (
    <div className={styles.socialstyle}>
      <p>Created by Michael LeMoine</p>
      <a href="http://www.linkedin.com"> <img src={linkedIn} alt="linkedin"/></a>
        
    </div>
  );
}

export default Socials;
