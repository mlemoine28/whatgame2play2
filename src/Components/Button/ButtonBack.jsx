import React from "react";
import styles from "./Button.module.css";

function ButtonBack({ label, handleClick }) {
  return (
    <button className={styles.buttonBack} onClick={handleClick}>
      {label}
    </button>
  );
}

export default ButtonBack;
