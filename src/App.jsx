import React from "react";
import "../src/style.css";
import Button2 from "./Components/Button/Button2";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Button2 label="Button One" />
      <Button2 label="Button Two" />
      <Button2 label="Button Three" />
      <Button2 label="Button Four" />
    </div>
  );
}
export default App; //not sure what the "default" part is though
