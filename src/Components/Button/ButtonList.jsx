import React from "react";
import styles from "./Button.module.css";

function ButtonList({ label, handleClick, disabled, style }) {
  return (
    <button
      className={styles.buttonList}
      onClick={handleClick}
      disabled={disabled}
      style={style}
    >
      {label}
    </button>
  );
}

export default ButtonList;
