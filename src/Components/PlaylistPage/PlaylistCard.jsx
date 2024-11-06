import React from "react";
import styles from "../Cards/MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";
import ButtonList from "../Button/ButtonList";
import ButtonDetails from "../Button/ButtonDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function PlaylistCard({
  gameTitle,
  gameMetacritic,
  gameImage,
  handleMoreDetails,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const removeCardClick = () => {
    
  };

  return (
    <div className={styles.containerdisplay}>
      <div>
        <div className={styles.displaycard}>
          <h1 className={styles.displaycardtitle}>{gameTitle}</h1>
          <img
            src={gameImage}
            style={{
              width: "288px",
              height: "162px",
              marginTop: "1rem",
              border: "1px solid white",
            }}
            alt="game"
          />

          <div className={styles.displaycardcontent}>
            <div
              className={styles.displayattributes}
              style={{ textAlign: "center" }}
            >
              <b>Metacritic</b>:
              {gameMetacritic === null ? (
                <span className={styles.pText}> Data not available</span>
              ) : (
                <span className={styles.pText}> {gameMetacritic}</span>
              )}{" "}
              <br />
            </div>

            <ButtonDetails
              label="More Details"
              handleClick={handleMoreDetails}
            ></ButtonDetails>
            <ButtonDetails
              label="Remove from List"
              handleClick={removeCardClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
