import React from "react";
import styles from "./MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";
import ButtonList from "../Button/ButtonList";
import ButtonDetails from "../Button/ButtonDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DetailsCard({
  gameTitle,
  gameRelease,
  gameMetacritic,
  gameImage,
  gameLength,
  gamePlatforms,
  gameAchievements,
  gameDescription,
  gameImage2,
}) {
  const navigate = useNavigate();
  const backButtonClick = () => {
    navigate("/games");
  };

  return (
    <div className={styles.containerdisplay}>
      <div>
        <div className={styles.displaycard}>
          <h1 className={styles.displaycardtitle}>{gameTitle}</h1>

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
              <b>Platforms</b>: {gamePlatforms} <br />
              <b>Achievements</b>: {gameAchievements} <br />
              <b>Description</b>: {gameDescription} <br />
            </div>
            <img
              src={gameImage}
              style={{ width: "230px", height: "180px" }}
              alt="game"
            />
            <img
              src={gameImage2}
              style={{ width: "230px", height: "180px" }}
              alt="additionalgameimage"
            />
            <ButtonList label="Add to List" />
            <ButtonDetails label="Back" />
          </div>
        </div>
      </div>
    </div>
  );
}
