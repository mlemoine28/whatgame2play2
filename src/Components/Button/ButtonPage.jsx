import React from "react";
import styles from "./Button.module.css";

function ButtonPage({ label, handleClick, disabled = false }) {
  
  const clickFunction = () => {
    if (disabled) {
      return;
    } else {
      handleClick();
    }
  };

  return (
    <button
      className={!disabled ? styles.buttonpage : styles.disabledButton}
      onClick={clickFunction}
    >
      {label}
    </button>
  );
}

export default ButtonPage;
