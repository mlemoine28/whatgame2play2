import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MiniCardDisplay from "../Cards/MiniCardDisplay";
import styles from "./DetailsPage.module.css";
import DetailsCard from "../Cards/DetailsCard";
import { useState, useEffect } from "react";

export default function DetailsPage({}) {
  const navigate = useNavigate();
  const { id } = useParams(); //takes a parameter specifically from a URL
  const [detailedGame, setDetailedGame] = useState(null);
  const [trailers, setTrailers] = useState();

  useEffect(() => {
    const gameURL = `https://api.rawg.io/api/games/${id}?key=${
      //If I want to use multiple API requests/calls,
      import.meta.env.VITE_REACT_APP_RAWG_API_KEY
    }`;

    const trailerURL = `https://api.rawg.io/api/games/${id}/movies?key=${
      //If I want to use multiple API requests/calls,
      import.meta.env.VITE_REACT_APP_RAWG_API_KEY
    }`;

    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); //you're waiting for the fetch to finish, and you're CONVERTING that fetch response into a Javascript object.
        return data;
      } catch (error) {
        console.error("Error fetching data:", error); //use console.error BECAUSE it shows the error in red in the log.
      }
    };

    fetchData(gameURL).then((data) => setDetailedGame(data));
    fetchData(trailerURL).then((data) => setTrailers(data));
  }, [id]);
  console.log("Received game data:", detailedGame); // For debugging

  return (
    <div className={styles.containerdisplay}>
      <DetailsCard
        gameTitle={detailedGame?.name}
        gameRelease={detailedGame?.released}
        gameMetacritic={detailedGame?.metacritic}
        gameImage={detailedGame?.background_image}
        gameLength={detailedGame?.playtime}
        gamePlatforms={detailedGame?.platforms.platforms}
        gameAchievements={detailedGame?.achievements_count}
        gameDescription={detailedGame?.description}
        gameImage2={detailedGame?.background_image_additional}
      />
    </div>
  );
}
