import React from "react";
import "../src/style.css";
import Button2 from "./Components/Button/Button2";
import Header from "./Components/Header/Header";
import Text from "./Components/Text/Text";
import { Breadcrumb, Card } from "react-bootstrap";
import GamingBackground from "./assets/gamingbackground.png";

function App() {
  return (
    <div>
      <Header />
      <Button2 label="Button One" />
      <Button2 label="Button Two" />
      <Button2 label="Button Three" />
      <Button2 label="Button Four" />
      <Card style={{ width: "18rem" }}>
        <Card.Img src={GamingBackground}></Card.Img>
        <Card.Title>Welcome To WhatGame2Play</Card.Title>
        <Card.Text>Hi there</Card.Text>
      </Card>
      <Card>
        <Card.Title>The Game For You!</Card.Title>
      </Card>
      <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
export default App; //not sure what the "default" part is though
