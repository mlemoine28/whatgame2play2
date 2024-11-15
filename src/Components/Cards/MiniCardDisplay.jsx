import React from "react";
import styles from "./MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";
import ButtonList from "../Button/ButtonList";
import ButtonDetails from "../Button/ButtonDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { usePlaylist } from "../../assets/Contexts/PlaylistContext";

export default function MiniCardDisplay({
  gameDetails,
  // gameTitle,
  // gameRelease,
  // gameMetacritic,
  // gameImage,
  // gameLength,
  // gamePlatforms,
  // gameAchievements,
  // gameDescription,
  // gameImage2,
  handleMoreDetails,
  buttonText = "Add to List",
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToPlaylist, playlistButtonClick } = usePlaylist();
  const handleClick = () => {
    playlistButtonClick(gameDetails);
  };

  return (
    <div className={styles.containerdisplay}>
      <div>
        <div className={styles.displaycard}>
          <h1 className={styles.displaycardtitle}>{gameDetails.name}</h1>
          <img
            src={gameDetails.background_image}
            style={{
              width: "288px",
              height: "162px",
              marginTop: "1rem",
              border: "1px solid white",
            }}
            alt="game"
          />

          <div className={styles.displaycardcontent}>
            <div className={styles.displayattributes}>
              <b>Released</b>: {gameDetails.released} <br />
              <b>Metacritic</b>:
              {gameDetails.metacritic === null ? (
                <span className={styles.pText}> Data not available</span>
              ) : (
                <span className={styles.pText}> {gameDetails.metacritic}</span>
              )}{" "}
              <br />
              <b>Length</b>:
              {gameDetails.playtime === 0 ? (
                <span className={styles.pText}> Data not available</span>
              ) : (
                <span className={styles.pText}>
                  {" "}
                  {gameDetails.playtime} hours
                </span>
              )}{" "}
              <br />
            </div>

            <ButtonDetails
              label="More Details"
              handleClick={handleMoreDetails}
            ></ButtonDetails>
            <ButtonList label={buttonText} handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
