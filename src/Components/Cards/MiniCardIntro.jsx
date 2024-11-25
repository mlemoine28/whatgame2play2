import React from "react";
import styles from "./MiniCard.module.css";
import buttonstyles from "../Button/Button.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";
import GamingConsoles from "../../assets/controller-background.png";
import ButtonIntro from "../Button/ButtonIntro";
import NavBarTop from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useState } from "react";

export default function MiniCardIntro() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleIntroButtonClick = () => {
    navigate("/questions");
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <div>
          <Spinner animation="border" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className={styles.container}>
          <img
            src={GamingConsoles}
            className={styles.cardimage}
            alt="Game Consoles"
          ></img>
          <div className={styles.titlecontainer}>
            <div>
              <h1>Discover your next favourite game.</h1>
            </div>
          </div>
          <div className={styles.textcontainer}>
            <ButtonIntro
              label="Get Started"
              handleClick={handleIntroButtonClick}
            >
              {" "}
            </ButtonIntro>
          </div>
        </div>
      )}
    </div>
  );
}

//Get the maincard components moved into this file.
//Also move buttons, navbar, and search bar into this as well.
//You want the MiniCard intro to have everything necessary to make it your home screen. Right now most things are in MainCard.
