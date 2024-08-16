import React from "react";
import styles from "./Button.module.css";

function Button2({ label, onClick }) {
  return <button className={styles.buttonstyle} onClick={onClick}>{label}</button>;
}

export default Button2;
