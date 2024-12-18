import React from "react";
import styles from "./Button.module.css";

function ButtonBack({ label, handleClick, disabled }) {
  return (
    <button
      className={styles.buttonBack}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default ButtonBack;
