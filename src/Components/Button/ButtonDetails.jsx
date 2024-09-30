import React from "react";
import styles from "./Button.module.css";

function ButtonDetails({ label, handleClick }) {
  return (
    <button className={styles.buttonDetails} onClick={handleClick}>
      {label}
    </button>
  );
}

export default ButtonDetails;
