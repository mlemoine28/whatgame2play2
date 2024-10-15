import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MiniCardDisplay from "../Cards/MiniCardDisplay";
import styles from "./DetailsPage.module.css";
import DetailsCard from "../Cards/DetailsCard";
import { useState, useEffect } from "react";

export default function DetailsPage({}) {
  const navigate = useNavigate();
  const { id, game_pk } = useParams(); //takes a parameter specifically from a URL
  const [detailedGame, setDetailedGame] = useState(null);
  const [trailers, setTrailers] = useState();
  const [screenshots, setScreenShots] = useState();

  useEffect(
    () => {
      const gameURL = `https://api.rawg.io/api/games/${id}?key=${
        //If I want to use multiple API requests/calls,
        import.meta.env.VITE_REACT_APP_RAWG_API_KEY
      }`;

      const trailerURL = `https://api.rawg.io/api/games/${id}/movies?key=${
        //If I want to use multiple API requests/calls,
        import.meta.env.VITE_REACT_APP_RAWG_API_KEY
      }`;

      const screenshotsURL = `https://api.rawg.io/api/games/${game_pk}/screenshots?key=${
        //If I want to use multiple API requests/calls,
        import.meta.env.VITE_REACT_APP_RAWG_API_KEY
      }`;

      const fetchData = async (url) => {
        //the URL is referring to one of the above URL variables that you made (like gameURL, or trailerURL)
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
      fetchData(screenshotsURL).then((data) => setScreenShots(data));
    },
    [id],
    [game_pk]
  );

  console.log("Received game data:", detailedGame); // For debugging
  console.log("Trailer found:", trailers);
  console.log("Screenshots found:", screenshots);

  return (
    <div className={styles.containerdisplay}>
      <DetailsCard
        gameTitle={detailedGame?.name}
        gameRelease={detailedGame?.released}
        gameTrailer={trailers?.preview}
        gameMetacritic={detailedGame?.metacritic}
        gameWebsite={detailedGame?.website}
        gameImage={detailedGame?.background_image}
        gameLength={detailedGame?.playtime}
        gamePlatforms={detailedGame?.platforms.platforms}
        gameAchievements={detailedGame?.achievements_count}
        gameDescription={detailedGame?.description}
        gameImage2={detailedGame?.background_image_additional}
        gameScreenshots={screenshots.results}
      />
    </div>
  );
}
