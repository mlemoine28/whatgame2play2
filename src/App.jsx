import React from "react";
import "../src/style.css";
import Button2 from "./Components/Button/Button2";
import Button from "react-bootstrap/Button";
import Header from "./Components/Header/Header";
import { Breadcrumb, Card } from "react-bootstrap";
import GamingConsoles from "./assets/GamingConsolesPic.jpg";
import TitleImage from "./assets/WhatGame2Play_Header.png";
import MainCard from "./Components/MainCard/MainCard";
import GenreList from "./Components/GenreList/GenreList";
import MiniCard from "./Components/MiniCard/MiniCardIntro";
import Socials from "./Components/Socials/Socials";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<MiniCard />} />
        <Route path="/questions" element={<MainCard />} />
      </Routes>
      <Socials />
    </BrowserRouter>
  );
}
export default App;
