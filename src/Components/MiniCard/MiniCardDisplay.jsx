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
    <div className={styles.container}>
      <div className={styles.titlecontainer}>
        <div>
          <h1> {gameTitle}</h1>
        </div>
      </div>
      <div className={styles.textcontainer}>
        <div>
          Released: {gameRelease} <br></br>
          Metacritic: {gameMetacritic}
          <br></br>
          <img src={gameImage} style={{ width: "300px" }}></img>
        </div>
      </div>
    </div>
  );
}
