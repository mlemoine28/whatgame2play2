import React from "react";
import styles from "./MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";

export default function MiniCardDisplay({
  gameTitle,
  gameRelease,
  gameMetacritic,
  gameImage,
  gameStore,
}) {
  return (
    <div className={styles.containerdisplay}>
      <div className={styles.displaycard}>
        <h1 className={styles.displaycardtitle}>{gameTitle}</h1>
        
        <div className={styles.displaycardcontent}>
          <div>
            Released: {gameRelease} <br />
            Metacritic: {gameMetacritic} <br />
            Store: {gameStore}
            <br />
          </div>
          <img src={gameImage} style={{ width: "230px", height: "180px" }} alt="game" />
        </div>
      </div>
    </div>
  );
}