import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MiniCardDisplay from "../Cards/MiniCardDisplay";
import styles from "./DetailsPage.module.css";
import DetailsCard from "../Cards/DetailsCard";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";

export default function DetailsPage({}) {
  const navigate = useNavigate();
  const { id, game_pk } = useParams(); //takes a parameter specifically from a URL
  const [detailedGame, setDetailedGame] = useState(null);
  const [screenshots, setScreenShots] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const gameURL = `https://api.rawg.io/api/games/${id}?key=${
        //If I want to use multiple API requests/calls,
        import.meta.env.VITE_REACT_APP_RAWG_API_KEY
      }`;

      const screenshotsURL = `https://api.rawg.io/api/games/${id}/screenshots?key=${
        //If I want to use multiple API requests/calls,
        import.meta.env.VITE_REACT_APP_RAWG_API_KEY
      }`;

      const fetchData = async (url) => {
        //the URL is referring to one of the above URL variables that you made (like gameURL, or trailerURL)
        try {
          setLoading(true);
          const response = await fetch(url);
          const data = await response.json();
          console.log(data); //you're waiting for the fetch to finish, and you're CONVERTING that fetch response into a Javascript object.
          setLoading(false);
          return data;
        } catch (error) {
          setLoading(false);
          console.error("Error fetching data:", error); //use console.error BECAUSE it shows the error in red in the log.
        }
      };

      fetchData(gameURL).then((data) => setDetailedGame(data));
      fetchData(screenshotsURL).then((data) => setScreenShots(data));
    },
    [id],
    [game_pk]
  );

  console.log("Received game data:", detailedGame); // For debugging

  console.log("Screenshots found:", screenshots);

  return (
    <div className={styles.containerdisplay}>
      {loading ? (
        <div>
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <div>
          <Button variant="primary" size="sm" style={{ marginLeft: "55rem", marginTop: "2rem", scale: "70%" }}>
            <h1>+Add to Playlist</h1>
          </Button>

          <DetailsCard
            gameTitle={detailedGame?.name}
            gameRelease={detailedGame?.released}
            gameDeveloper={detailedGame?.developers
              ?.map((developer) => developer.name)
              .join(", ")}
            gamePublisher={detailedGame?.publishers
              ?.map((publisher) => publisher.name)
              .join(", ")}
            gameMetacritic={detailedGame?.metacritic}
            gameWebsite={detailedGame?.website}
            gameImage={detailedGame?.background_image}
            gameLength={detailedGame?.playtime}
            gamePlatforms={detailedGame?.platforms
              ?.map((platform) => platform.platform.name)
              .join(", ")}
            gameGenres={detailedGame?.genres
              ?.map((genre) => genre.name)
              .join(", ")}
            gameAchievements={detailedGame?.achievements_count}
            gameDescription={detailedGame?.description_raw}
            gameImage2={detailedGame?.background_image_additional}
            gameScreenshots={screenshots?.results}
            gameTags={detailedGame?.tags?.map((tag) => tag.name).join(", ")}
          />
        </div>
      )}
    </div>
  );
}
