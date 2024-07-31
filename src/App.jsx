import React from "react";
import Person from "./Components/Person/Person.jsx";
import Button from "./Components/Button/Button.jsx";
import Button2 from "./Components/Button/Button2.jsx";
import Text from "./Components/Text/Text.jsx";
import ListGroup from "./Components/ListGroup/ListGroup.jsx";
import Card from "./Components/Card/Card.jsx";
import "../src/style.css";

function App() {
  const buttonClick = () => {
    alert("Button clicked! Nice!");
  };

  return (
    <div>
      <Person name="Michael" age={34} colour="Yellow" />
      <Button onClick={buttonClick} label={"Click me! Now!"} />
      <ListGroup />
      <Card />
      <Card />
      <Button2 />
    </div>
  );
}

export default App; //not sure what the "default" part is though
