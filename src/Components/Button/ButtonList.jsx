import React from "react";
import styles from "./Button.module.css";

function ButtonList({ label, handleClick, disabled }) {
  return (
    <button
      className={styles.buttonList}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default ButtonList;
