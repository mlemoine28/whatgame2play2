import React from "react";
import styles from "./MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";
import ButtonList from "../Button/ButtonList";
import ButtonDetails from "../Button/ButtonDetails";
import { useState } from "react";

export default function MiniCardDisplay({
  gameTitle,
  gameRelease,
  gameMetacritic,
  gameImage,
  gameLength,
  gamePlatforms,
}) {
  const [showGameCards, setShowGameCards] = useState(true);
  const [showDetailsPage, setShowDetailsPage] = useState(false);

  const detailsButtonClick = () => {
    setShowGameCards(false);
    setShowDetailsPage(true);
  };

  return (
    <div className={styles.containerdisplay}>
      {showGameCards && (
        <div>
          <div className={styles.displaycard}>
            <h1 className={styles.displaycardtitle}>{gameTitle}</h1>

            <div className={styles.displaycardcontent}>
              <div className={styles.displayattributes}>
                <b>Released</b>: {gameRelease} <br />
                <b>Metacritic</b>: {gameMetacritic} <br />
                <b>Length</b>:
                {gameLength === 0 ? (
                  <span className={styles.pText}> Data not available</span>
                ) : (
                  <span className={styles.pText}> {gameLength} hours</span>
                )}{" "}
                <br />
              </div>
              <img
                src={gameImage}
                style={{ width: "230px", height: "180px" }}
                alt="game"
              />
              <ButtonDetails
                label="More Details"
                handleClick={detailsButtonClick}
              />
              <ButtonList label="Add to List" />
            </div>
          </div>
        </div>
      )}

      {showDetailsPage && (
        <div>
          <div className={styles.displaycard}>
            <h1 className={styles.displaycardtitle}>{gameTitle}</h1>
            <div className={styles.displaycardcontent}>
              <div className={styles.displayattributes}>
                <b>Released</b>: {gameRelease} <br />
                <b>Metacritic</b>: {gameMetacritic} <br />
                <b>Length</b>:
                {gameLength === 0 ? (
                  <span className={styles.pText}> Data not available</span>
                ) : (
                  <span className={styles.pText}> {gameLength} hours</span>
                )}{" "}
                <br />
              </div>
              <img
                src={gameImage}
                style={{ width: "230px", height: "180px" }}
                alt="game"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
