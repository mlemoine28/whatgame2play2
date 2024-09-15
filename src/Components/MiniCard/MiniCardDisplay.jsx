import React from "react";
import styles from "./MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";

export default function MiniCardDisplay({
  gameTitle,
  gameRelease,
  gameMetacritic,
  gameImage,
}) {
  return (
    <div className={styles.containerdisplay}>
      <div className={styles.displaycard}>
        <h1 className={styles.displaycardtitle}>{gameTitle}</h1>
        
        <div className={styles.displaycardcontent}>
          <div>
            Released: {gameRelease} <br />
            Metacritic: {gameMetacritic}
            <br />
          </div>
          <img src={gameImage} style={{ width: "200px", height: "150px" }} alt="game" />
        </div>
      </div>
    </div>
  );
}