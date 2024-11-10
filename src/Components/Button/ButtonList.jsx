import React from "react";
import styles from "./Button.module.css";

function ButtonList({ label, handleClick }) {
  return (
    <button className={styles.buttonAdd} onClick={handleClick}>
      {label}
    </button>
  );
}

export default ButtonList;
