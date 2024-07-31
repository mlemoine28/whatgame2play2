import React from "react";
import Text from "../Text/Text";
function Button({ onClick, label }) {
  return (
    <button className="button" onClick={onClick}>
      <Text color="purple"> {label} </Text>
    </button>
  );
}

export default Button;
