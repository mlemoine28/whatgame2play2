import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MiniCardDisplay from "../Cards/MiniCardDisplay";
import styles from "./DetailsPage.module.css";
import DetailsCard from "../Cards/DetailsCard";

export default function DetailsPage({}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { game } = location.state;

  console.log("Received game data:", game); // For debugging

  return (
    <div className={styles.containerdisplay}>
      <DetailsCard
        gameTitle={game.name}
        gameRelease={game.released}
        gameMetacritic={game.metacritic}
        gameImage={game.background_image}
        gameLength= {game.playtime}
        gamePlatforms={game.platforms.platforms}
        gameAchievements={game.achievements_count}
        gameDescription={game.description}
        gameImage2={game.background_image_additional}
      />
    </div>
  );
}
