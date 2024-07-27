import React from "react";
import Text from "../Text/Text";

function Person({ name, age, colour}) {
 return (
     <div>
        <Text fontWeight="bold" color="blue">
            <h2>Name: {name}</h2>
        </Text>
         <h2>Age: <Text color="red">{age}</Text></h2>
         <h2>Colour: {colour}</h2>
     </div> 
 );
}

export default Person;