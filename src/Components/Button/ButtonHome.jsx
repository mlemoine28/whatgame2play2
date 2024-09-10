import React from "react";
import styles from "./Button.module.css";

function ButtonHome({ label, handleClick }) {
  return (
    <button className={styles.buttonhome} onClick={handleClick}>
      {label}
    </button>
  );
}

export default ButtonHome;
