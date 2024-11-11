import React from "react";
import styles from "./Button.module.css";

function ButtonHome({ label, handleClick, style, disabled }) {
  return (
    <button className={styles.buttonhome} onClick={handleClick} style={style} disabled={disabled}>
      {label}
    </button>
  );
}

export default ButtonHome;
