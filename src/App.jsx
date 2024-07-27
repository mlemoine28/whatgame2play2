import React from "react";
import Person from "./Components/Person/Person.jsx";
import Button from "./Components/Button/Button.jsx";
import Text from "./Components/Text/Text.jsx";

function App() {
    const buttonClick = () => {
        alert('Button clicked! Nice!');
    };
    
    return (
        <div>
            <Person 
                name="Michael" 
                age={34} 
                colour="Yellow"
            />
            <Button
                onClick={buttonClick}
                label={"Click me! Now!"}
            />
        </div>
    );
}



export default App; //not sure what the "default" part is though