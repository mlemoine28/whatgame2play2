import React from "react";

function Text({ children, size, fontWeight, color, backgroundColor }) {
  const style = { fontSize: size, fontWeight, color, backgroundColor };
  return <div style={style}>{children}</div>;
}

export default Text;
