import React from "react";
import Text from "../Text/Text";

function Person({ name, age, colour}) {
 return (
     <div>
        <Text fontWeight="bold" color="blue" size="50px">
            <h2>Name: {name}</h2>
        </Text>
         <h2>Age: <Text color="red" fontWeight="bold" size="50px">{age}</Text></h2>
         <h2>Colour: <Text color="yellow" fontWeight="bold" size="60px">{colour}</Text></h2>
     </div> 
 );
}

export default Person;