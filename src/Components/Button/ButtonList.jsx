import React from "react";
import styles from "./Button.module.css";

function ButtonList({ label, handleClick }) {
  return (
    <button className={styles.buttonList} onClick={handleClick}>
      {label}
    </button>
  );
}

export default ButtonList;
