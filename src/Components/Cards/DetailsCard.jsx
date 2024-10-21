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
  gameGenres,
  gameAchievements,
  gameDescription,
  gameImage2,
  gameScreenshots,
  gameDeveloper,
  gamePublisher,
  gameTags,
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
            <h1 style={{ marginBottom: "2.5rem", color: "#39FF14" }}>
              {gameTitle}
            </h1>
            <img
              src={gameImage}
              style={{
                width: "396px",
                height: "250px",
                border: "2px solid white",
                borderRadius: "5px",
              }}
              alt="game"
            />
          </div>

          <div className={styles.displaycardcontent}>
            <div className={styles.displayattributes}>
              <b className={styles.greenText}>Description</b>: <br />
              <div className={styles.whiteText}>{gameDescription}</div> <br />
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
              <div className={styles.detailsText}>
                <b className={styles.greenText}>Released</b>:<br />{" "}
                {gameRelease} <br />
                <br />
                <b className={styles.greenText}>Metacritic</b>:<br />
                {gameMetacritic === null ? (
                  <span className={styles.pText}> Data not available</span>
                ) : (
                  <span className={styles.pText}> {gameMetacritic}</span>
                )}{" "}
                <br />
                <br />
                <b className={styles.greenText}>Length</b>:<br />
                {gameLength === 0 ? (
                  <span className={styles.pText}> Data not available</span>
                ) : (
                  <span className={styles.pText}> {gameLength} hours</span>
                )}{" "}
                <br />
                <br />
                <b className={styles.greenText}>Platforms</b>:<br />{" "}
                {gamePlatforms}  <br />
                <br />
                <b className={styles.greenText}>Genre(s)</b>:<br /> {gameGenres}{" "}
                <br />
                <br />
                <b className={styles.greenText}>Developer(s)</b>:<br />{" "}
                {gameDeveloper} <br /> <br />
                <b className={styles.greenText}>Publisher(s)</b>:
                <br /> {gamePublisher} <br />
                <br />
                <b className={styles.greenText}>Achievements</b>: <br />
                {gameAchievements} <br />
                <br />
                <b className={styles.greenText}>Game Website: </b>
                <br />
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
                <br />
                <b className={styles.greenText}>Features/Tags</b>: <br />
                {gameTags} <br />
                <br />
              </div>
            </div>
            <div className={styles.screenshotContainer}>
              <img
                src={gameImage2}
                style={{
                  width: "396px",
                  height: "216px",
                  border: "2px solid white",
                  borderRadius: "5px",
                }}
                alt="additionalgameimage"
              />
            </div>
            <ButtonList label="Add to List" />
            <ButtonDetails label="Back" handleClick={backButtonClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
