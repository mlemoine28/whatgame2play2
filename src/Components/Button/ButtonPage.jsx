import React from "react";
import styles from "./Button.module.css";

function ButtonPage({ label, handleClick,  }) {
  return <button className = {styles.buttonpage} onClick={handleClick}>{label}</button>;
}

export default ButtonPage;
