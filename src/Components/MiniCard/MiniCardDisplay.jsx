import React from "react";
import styles from "./MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";

export default function MiniCardDisplay({
  gameTitle,
  gameRelease,
  gameMetacritic,
  gameImage,
  gameLength,
}) {
  return (
    <div className={styles.containerdisplay}>
      <div className={styles.displaycard}>
        <h1 className={styles.displaycardtitle}>{gameTitle}</h1>

        <div className={styles.displaycardcontent}>
          <div>
            <b>Released</b>: {gameRelease} <br />
            <b>Metacritic</b>: {gameMetacritic} <br />
            <b>Length</b>:
            {gameLength === 0 ? (
              <span className={styles.pText}> Data not available</span>
            ) : (
              <span className={styles.pText}> {gameLength} hours</span>
            )}
          </div>
          <img
            src={gameImage}
            style={{ width: "230px", height: "180px" }}
            alt="game"
          />
        </div>
      </div>
    </div>
  );
}
