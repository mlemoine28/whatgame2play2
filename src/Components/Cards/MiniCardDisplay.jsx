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

  const handlePlaylistButtonClick = (detailedGame) => {
    playlistButtonClick(detailedGame);
    setClicked(true);
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

            <FormSubmit>
              
            </FormSubmit>
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
