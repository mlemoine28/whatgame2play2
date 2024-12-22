import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

function ButtonBack({ label, handleClick, disabled, className }) {
  return (
    <button
      className={classNames(styles.buttonBack, className)}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default ButtonBack;
