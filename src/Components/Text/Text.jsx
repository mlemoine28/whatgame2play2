import React from "react";

function Text ({ children, size, fontWeight }) {
 return <div style= {{fontSize: size, fontWeight}}> { children }</div>;
}

export default Text;