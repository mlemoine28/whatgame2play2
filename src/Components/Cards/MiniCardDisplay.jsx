import React from "react";
import styles from "./MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";
import ButtonList from "../Button/ButtonList";
import ButtonDetails from "../Button/ButtonDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MiniCardDisplay({
  gameTitle,
  gameRelease,
  gameMetacritic,
  gameImage,
  gameLength,
  gamePlatforms,
  gameAchievements,
  gameDescription,
  gameImage2,
  handleMoreDetails,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.containerdisplay}>
      <div>
        <div className={styles.displaycard}>
          <h1 className={styles.displaycardtitle}>{gameTitle}</h1>
          <img
              src={gameImage}
              style={{ width: "288px", height: "162px", marginTop: "1rem", border: "1px solid white" }}
              alt="game"
            />

          <div className={styles.displaycardcontent}>
            <div className={styles.displayattributes}>
              <b>Released</b>: {gameRelease} <br />
              <b>Metacritic</b>:
              {gameMetacritic === null ? (
                <span className={styles.pText}> Data not available</span>
              ) : (
                <span className={styles.pText}> {gameMetacritic}</span>
              )}{" "}
              <br />
              <b>Length</b>:
              {gameLength === 0 ? (
                <span className={styles.pText}> Data not available</span>
              ) : (
                <span className={styles.pText}> {gameLength} hours</span>
              )}{" "}
              <br />
            </div>
            
            <ButtonDetails
              label="More Details"
              handleClick={handleMoreDetails}
            ></ButtonDetails>
            <ButtonList label="Add to List" />
          </div>
        </div>
      </div>
    </div>
  );
}
