import React from "react";
import styles from "../Cards/MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";
import ButtonList from "../Button/ButtonList";
import ButtonDetails from "../Button/ButtonDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function PlaylistCard({
  detailedGame,
  handleMoreDetails,
  buttonText = "Add To List",
  removeGame,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const removeCardClick = () => {
    removeGame(detailedGame.id);
  };

  return (
    <div className={styles.containerdisplay}>
      <div>
        <div className={styles.displaycard}>
          <h1 className={styles.displaycardtitle}>{detailedGame.name}</h1>
          <img
            src={detailedGame.background_image}
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
              <b>Released</b>: {detailedGame.released} <br />
              <b>Metacritic</b>:
              {detailedGame.metacritic === null ? (
                <span className={styles.pText}> Data not available</span>
              ) : (
                <span className={styles.pText}> {detailedGame.metacritic}</span>
              )}{" "}
              <br />
              <b>Length</b>:
              {detailedGame.playtime === 0 ? (
                <span className={styles.pText}> Data not available</span>
              ) : (
                <span className={styles.pText}>
                  {" "}
                  {detailedGame.playtime} hours
                </span>
              )}{" "}
              <br />
            </div>

            <ButtonDetails
              label="More Details"
              handleClick={() =>
                navigate(`/game/${detailedGame.id}`, {
                  state: { detailedGame },
                })
              }
            />
            <ButtonDetails label={buttonText} handleClick={removeCardClick} />
            
          </div>
        </div>
      </div>
    </div>
  );
}
