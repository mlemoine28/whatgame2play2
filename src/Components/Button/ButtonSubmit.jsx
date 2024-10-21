import React from "react";
import styles from "./Button.module.css";

function ButtonSubmit({ label, handleClick, loading }) {
  return (
    <button className={styles.buttonsubmit} onClick={handleClick}>
      {label}
    </button>
  );
}

export default ButtonSubmit;
