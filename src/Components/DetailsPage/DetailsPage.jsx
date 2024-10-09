import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MiniCardDisplay from "../Cards/MiniCardDisplay";
import styles from "./DetailsPage.module.css";
import DetailsCard from "../Cards/DetailsCard";

export default function DetailsPage({}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { games } = location.state;

  return (
    <div className={styles.containerdisplay}>
      {games.map((game, i) => (
        <DetailsCard
          key={i}
          gameTitle={game.name}
          gameRelease={game.released}
          gameMetacritic={game.metacritic}
          gameImage={game.background_image}
          gameLength={game.playtime}
          gamePlatforms={game.platforms}
          gameAchievements={game.achievements_count}
          gameDescription={game.description}
          gameImage2={game.background_image_additional}
        />
      ))}
    </div>
  );
}
