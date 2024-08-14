import React from "react";
import "../src/style.css";
import Button2 from "./Components/Button/Button2";
import Button from "react-bootstrap/Button";
import Header from "./Components/Header/Header";
import Text from "./Components/Text/Text";
import { Breadcrumb, Card } from "react-bootstrap";
import GamingConsoles from "./assets/GamingConsolesPic.jpg";
import TitleImage from "./assets/WhatGame2Play_Header.png";
import CardIntro from "./Components/CardIntro/CardIntro";

function App() {
  return (
    <div>
      <Header>{TitleImage}</Header>
      <CardIntro></CardIntro>
      <Card style={{ width: "rem" }}>
        <Card.Img src={GamingConsoles}></Card.Img>
        <Card.Title>Let's Find A Game For You</Card.Title>
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
