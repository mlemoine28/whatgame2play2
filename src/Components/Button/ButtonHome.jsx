import React from "react";
import styles from "./Button.module.css";

function ButtonHome({ label, onClick }) {
  return (
    <button className={styles.buttonhome} onClick={onClick}>
      {label}
    </button>
  );
}

export default ButtonHome;
