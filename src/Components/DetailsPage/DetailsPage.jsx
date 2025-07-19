import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./DetailsPage.module.css";
import DetailsCard from "../Cards/DetailsCard";
import { useState, useEffect, useMemo } from "react";
import Button from "react-bootstrap/Button";
import ButtonBack from "../Button/ButtonBack";
import { Spinner } from "react-bootstrap";
import { usePlaylist } from "../../assets/Contexts/PlaylistContext";
import FormSubmit from "../FormSubmit/FormSubmit";
import axios from "axios";
import usePlaylistCheck from "../Button/UsePlaylistCheck/usePlaylistCheck";

export default function DetailsPage({}) {
  const navigate = useNavigate();
  const { id, game_pk } = useParams(); //takes a parameter specifically from a URL
  const [detailedGame, setDetailedGame] = useState(null);
  const [screenshots, setScreenShots] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [loading, setLoading] = useState(false);
  const { userPlaylists } = usePlaylist();
  const location = useLocation();
  const steamSearchUrl = `https://store.steampowered.com/search/?term=${encodeURIComponent(
    detailedGame?.name
  )}`;

  const [clicked, setClicked] = useState(false);
  const { playlistButtonClick, playlist } = usePlaylist();
  const game = location.state?.game;

  const handleDropdownChange = async (selectedOption) => {
    const playlistId = selectedOption.value;

    try {
      // 1️⃣ Add game to `game` table first (safe to do even if it exists)
      await axios.post("http://localhost:8080/game/add", {
        game_id: detailedGame.id,
        name: detailedGame.name,
        released: detailedGame.released,
        metacritic: detailedGame.metacritic,
        background_image: detailedGame.background_image,
        playtime: detailedGame.playtime,
      });

      // 2️⃣ Then link game to selected playlist
      await axios.post("http://localhost:8080/playlist/addGameToPlaylist", {
        playlist_id: playlistId,
        game_id: detailedGame.id,
      });

      console.log(`Added "${detailedGame.name}" to playlist ${playlistId}`);
    } catch (err) {
      console.error("Error adding game to playlist:", err);
    }
  };

  const backButtonClick = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  };

  const handlePlaylistClick = async () => {
    // playlistButtonClick(detailedGame);
    // setClicked(true);
    console.log(detailedGame);
    const body = { userID: 1, game_id: detailedGame.id, title: "Completed" };
    // const response = await axios.put(
    //   "http://localhost:8080/playlist/add",
    //   body
    // );
    // console.log("Response from server:", response);
  };

  // req.body.game_id,
  // req.body.title,
  // req.body.description,
  // req.body.release_date,
  // req.body.metacritic_score,
  // req.body.cover_image_url,
  // req.body.website

  const isGameInPlaylist = useMemo(() => {
    /*
      playlist is an array

      arrays have MANY functions you can use on them in javascript, some is just one of them

      for example:
      forEach --> lets you perform a function "for each" item in the array
      map --> applies a functino to an array and returns a modified array
      some --> runs a function on every item of the array and returns true or false based on the condition
      etc.
    */

    //playlist currently looks like: [{id: 1}, {id: 2}, {id: 4}]
    const playlistIds = playlist.map((game) => game.id); // returned value: [1, 2, 4 .. etc]
    const playlistCheck = playlistIds.includes(detailedGame?.id);
    console.log("Detailed Game:", detailedGame);

    return playlistCheck;
  }, [playlist, detailedGame]); //This is the key point here - needs to have detailedGame in the dependency array to work.

  useEffect(() => {
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

    const fetchPlaylists = async () => {
      const body = { userID: 1 };
      const response = await axios.get(
        "http://localhost:8080/playlist/getPlaylists",
        body
      );
      console.log("Response from playlists:", response);
    };

    fetchData(gameURL).then((data) => setDetailedGame(data));
    fetchData(screenshotsURL).then((data) => setScreenShots(data));
    fetchPlaylists().then((data) => {
      setPlaylists(data);
    });
  }, [id, game_pk]);

  console.log("Received game data:", detailedGame); // For debugging

  console.log("Screenshots found:", screenshots);

  return (
    <div className={styles.containerdisplay}>
      {loading ? (
        <div className={styles.textcontainer}>
          <Spinner
            animation="border"
            variant="info"
            style={{ scale: "150%", marginBottom: "48rem" }}
          />
        </div>
      ) : (
        <div>
          <div className={styles.buttoncontainer2}>
            {
              <FormSubmit
                options={userPlaylists} // 👈 your playlists from context
                placeholder="Add to Playlist"
                selectedAnswers={null}
                handleChange={handleDropdownChange}
              />

              /* <Button
              className={styles.buttonPlaylist}
              variant="primary"
              size="sm"
              style={{
                color:
                  isGameInPlaylist || clicked ? "rgb(57, 255, 20)" : "white",
              }}
              onClick={handlePlaylistClick}
              disabled={isGameInPlaylist}
            >
              <div style={{ width: "6rem" }}>
                {isGameInPlaylist || clicked ? "✓ Added!" : "+ Add To Playlist"}
              </div>
            </Button> */
            }
            <ButtonBack
              className={styles.backButton}
              label="Back"
              handleClick={backButtonClick}
            />
          </div>
          <div className={styles.container}>
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
              gameSteam={steamSearchUrl}
            />
          </div>
        </div>
      )}
    </div>
  );
}
