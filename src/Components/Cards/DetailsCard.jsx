import React from "react";
import styles from "./MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";
import ButtonList from "../Button/ButtonList";
import ButtonDetails from "../Button/ButtonDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Markdown from "markdown-to-jsx";

export default function DetailsCard({
  gameTitle,
  gameRelease,
  gameMetacritic,
  gameImage,
  gameWebsite,
  gameLength,
  gamePlatforms,
  gameAchievements,
  gameDescription,
  gameImage2,
  gameScreenshots,
}) {
  const navigate = useNavigate();
  const backButtonClick = () => {
    navigate("/games");
  };

  return (
    <div className={styles.containerdisplay2}>
      <div>
        <div>
          <div style={{ textAlign: "center" }}>
            <h1>{gameTitle}</h1>
            <img
              src={gameImage}
              style={{ width: "450px", height: "275px" }}
              alt="game"
            />
          </div>

          <div className={styles.displaycardcontent}>
            <div className={styles.displayattributes}>
              <b className={styles.greenText}>Released</b>: {gameRelease} <br />
              <b className={styles.greenText}>Metacritic</b>:
              {gameMetacritic === null ? (
                <span className={styles.pText}> Data not available</span>
              ) : (
                <span className={styles.pText}> {gameMetacritic}</span>
              )}{" "}
              <br />
              <b className={styles.greenText}>Length</b>:
              {gameLength === 0 ? (
                <span className={styles.pText}> Data not available</span>
              ) : (
                <span className={styles.pText}> {gameLength} hours</span>
              )}{" "}
              <br />
              <b className={styles.greenText}>Platforms</b>: {gamePlatforms}{" "}
              <br />
              <b className={styles.greenText}>Achievements</b>:{" "}
              {gameAchievements} <br />
              <b className={styles.greenText}>Screenshots</b>:{" "}
              <div className={styles.screenshotContainer}>
                {gameScreenshots && gameScreenshots.length > 0 ? (
                  gameScreenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot.image}
                      alt={`Screenshot ${index + 1}`}
                      className={styles.screenshotImage}
                    />
                  ))
                ) : (
                  <span className={styles.whiteText}>
                    No screenshots available
                  </span>
                )}
              </div>
              <br />
              <b className={styles.greenText}>Game Website: </b>
              {gameWebsite ? (
                <a
                  href={gameWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whiteText}
                >
                  {gameWebsite}
                </a>
              ) : (
                <span className={styles.whiteText}>Data not available</span>
              )}
              <br />
              <b className={styles.greenText}>Description</b>:{" "}
              <Markdown className={styles.whiteText}>
                {gameDescription}
              </Markdown>{" "}
              <br />
            </div>
            <img
              src={gameImage2}
              style={{ width: "350px", height: "250px" }}
              alt="additionalgameimage"
            />
            <ButtonList label="Add to List" />
            <ButtonDetails label="Back" handleClick={backButtonClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
