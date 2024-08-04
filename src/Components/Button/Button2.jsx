import React from "react";
import styles from "./Button.module.css";

function Button2({ label }) {
  return <button className={styles.buttonstyle}>{label}</button>;
}

export default Button2;
