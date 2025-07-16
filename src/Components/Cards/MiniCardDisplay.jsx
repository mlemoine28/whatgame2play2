import React from "react";
import styles from "./MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";
import ButtonList from "../Button/ButtonList";
import ButtonDetails from "../Button/ButtonDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { usePlaylist } from "../../assets/Contexts/PlaylistContext";
import usePlaylistCheck from "../Button/UsePlaylistCheck/usePlaylistCheck";


export default function MiniCardDisplay({
  detailedGame,
  handleMoreDetails,
  buttonText = "Add To Playlist",
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { playlist, playlistButtonClick } = usePlaylist();
  const isGameInPlaylist = usePlaylistCheck(playlist, detailedGame);
  const [clicked, setClicked] = useState(false);
  const { userPlaylists } = usePlaylist();

  const handlePlaylistButtonClick = (detailedGame) => {
    playlistButtonClick(detailedGame);
    setClicked(true);
  };

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

  return (
    <div className={styles.containerdisplay}>
      <div>
        <div className={styles.displaycard}>
          <h1 className={styles.displaycardtitle}>{detailedGame.name}</h1>
          <div
            className={styles.gameImage}
            style={{
              backgroundImage: `url(${detailedGame.background_image})`,
            }}
          ></div>

          <div className={styles.displaycardcontent}>
            <div className={styles.displayattributes}>
              <b>Released</b>: {detailedGame.released} <br />
              <b>Metacritic</b>:
              {detailedGame.metacritic === null ? (
                <span className={styles.pText}> Data not available</span>
              ) : (
                <span className={styles.pText}> {detailedGame.metacritic}</span>
              )}{" "}
              <br />
              <b>Length</b>:
              {detailedGame.playtime === 0 ? (
                <span className={styles.pText}> Data not available</span>
              ) : (
                <span className={styles.pText}>
                  {" "}
                  {detailedGame.playtime} hours
                </span>
              )}{" "}
              <br />
            </div>

            <ButtonDetails
              label="More Details"
              handleClick={handleMoreDetails}
            ></ButtonDetails>

            <FormSubmit
              options={userPlaylists} // 👈 your playlists from context
              placeholder="Add to Playlist"
              selectedAnswers={null}
              handleChange={handleDropdownChange}
            />
            {/* <ButtonList
              label={isGameInPlaylist || clicked ? "Added! ✓" : buttonText}
              handleClick={() => handlePlaylistButtonClick(detailedGame)}
              disabled={isGameInPlaylist || clicked}
              style={{
                backgroundColor:
                  isGameInPlaylist || clicked ? "gray" : "#4040FF",
                color:
                  isGameInPlaylist || clicked ? "rgb(57, 255, 20)" : "white",
              }}
            ></ButtonList> */}
          </div>
        </div>
      </div>
    </div>
  );
}
