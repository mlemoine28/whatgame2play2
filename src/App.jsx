import React from "react";
import Person from "./Components/Person/Person.jsx";
import Button from "./Components/Button/Button.jsx";
import Text from "./Components/Text/Text.jsx";
import ListGroup from "./Components/ListGroup/ListGroup.jsx";
import Card from "./Components/Card/Card.jsx";

function App() {
  const buttonClick = () => {
    alert("Button clicked! Nice!");
  };

  return (
    <div>
      <Person name="Michael" age={34} colour="Yellow" />
      <Button onClick={buttonClick} label={"Click me! Now!"} />
      <ListGroup />
    </div>
  );
}

export default App; //not sure what the "default" part is though
