import React from "react";
import styles from "./Button.module.css";

function ButtonIntro({ label, handleClick }) {
  return (
    <button className={styles.buttonIntro} onClick={handleClick}>
      {label}
    </button>
  );
}

export default ButtonIntro;
