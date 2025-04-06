import React from "react";
import "../src/style.css";
import Header from "./Components/Header/Header";
import QuestionsPage from "./Components/QuestionsPage/QuestionsPage";
import MiniCardIntro from "./Components/Cards/MiniCardIntro";
import Socials from "./Components/Socials/Socials";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBarTop from "./Components/NavBar/NavBar";
import ResultsPage from "./Components/ResultsPage/ResultsPage";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import EnableScroll from "./Components/EnableScroll/EnableScroll";
import PlaylistPage from "./Components/PlaylistPage/PlaylistPage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import { PlaylistProvider } from "./assets/Contexts/PlaylistContext";

function App() {
  return (
    <PlaylistProvider>
      <BrowserRouter basename="/whatgame2play2">
        <Header />
        <NavBarTop />
        <EnableScroll />
        <Routes>
          <Route index element={<MiniCardIntro />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/games" element={<ResultsPage />} />
          <Route path="/game/:id" element={<DetailsPage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/profile" element={<ProfilePage />} />{" "}
          {/*This will eventually be /profile:id when fully set up */}
        </Routes>
        <Socials />
      </BrowserRouter>
    </PlaylistProvider>
  );
}
export default App;
