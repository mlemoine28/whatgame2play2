import React from "react";

function Text ({ children, size, fontWeight, color }) {
 return ( 
 <div style= {{ fontSize: size, fontWeight, color }}> 
 { children }
 </div>
 );
}

export default Text;