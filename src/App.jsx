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
import MainCard from "./Components/MainCard/MainCard";

function App() {
  return (
    <div>
      <Header>{TitleImage}</Header>
      <CardIntro></CardIntro>
      <MainCard/>
    </div>
  );
}
export default App; //not sure what the "default" part is though
