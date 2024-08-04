import React from "react";
import Text from "../Text/Text";
import styles from "./Button.module.css";
function Button({ onClick, label }) {
  return (
    <button className={styles.buttonstyle} onClick={onClick}>
      <Text hero="blue" color="purple">
        {" "}
        {label}{" "}
      </Text>
    </button>
  );
}

export default Button;
