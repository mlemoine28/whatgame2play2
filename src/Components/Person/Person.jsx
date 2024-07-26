import React from "react";

function Person({ name, age, colour}) {
 return (
     <div>
         <h2>Name: {name}</h2>
         <h2>Age: {age}</h2>
         <h2>Colour: {colour}</h2>
     </div> 
 );
}

export default Person;