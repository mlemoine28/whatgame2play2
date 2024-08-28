import React from "react";
import "../src/style.css";
import Button2 from "./Components/Button/Button2";
import Button from "react-bootstrap/Button";
import Header from "./Components/Header/Header";
import Text from "./Components/Text/Text";
import { Breadcrumb, Card } from "react-bootstrap";
import GamingConsoles from "./assets/GamingConsolesPic.jpg";
import TitleImage from "./assets/WhatGame2Play_Header.png";
import MainCard from "./Components/MainCard/MainCard";
import GenreList from "./Components/GenreList/GenreList";

function App() {
  return (
    <div>
      <Header></Header>
      <MainCard />
    </div>
  );
}
export default App; //not sure what the "default" part is though
