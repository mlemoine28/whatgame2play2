import React from "react";
import "../src/style.css";
import Button2 from "./Components/Button/ButtonIntro";
import Button from "react-bootstrap/Button";
import Header from "./Components/Header/Header";
import { Breadcrumb, Card } from "react-bootstrap";
import GamingConsoles from "./assets/GamingConsolesPic.jpg";
import TitleImage from "./assets/WhatGame2Play_Header.png";
import QuestionsPage from "./Components/QuestionsPage/QuestionsPage";

import MiniCardIntro from "./Components/MiniCard/MiniCardIntro";
import Socials from "./Components/Socials/Socials";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarTop from "./Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import MiniCardDisplay from "./Components/MiniCard/MiniCardDisplay";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBarTop />
      <Routes>
        <Route path="/home" element={<MiniCardIntro />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/games" element={<MiniCardDisplay />} />
      </Routes>
      <Socials />
    </BrowserRouter>
  );
}
export default App;
