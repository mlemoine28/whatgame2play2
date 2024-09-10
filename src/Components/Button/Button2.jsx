import React from "react";
import styles from "./Button.module.css";

function Button2({ label, handleClick }) {
  return <button className={styles.buttonstyle} onClick={handleClick}>{label}</button>;
}

export default Button2;
