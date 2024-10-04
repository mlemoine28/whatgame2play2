import React from "react";
import styles from "./MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";
import GamingConsoles from "../../assets/controller-background.png";

export default function MiniCardIntro({ title, text1, text2, options }) {
  return (
    <div className={styles.container}>
      <img src={GamingConsoles} className={styles.cardimage}></img>
            <div className={styles.titlecontainer}>
        <div><h1>{text1}</h1></div>
      </div>
      <div className={styles.textcontainer}>
        <div>{text2}</div>
      </div>
    </div>
  );
}

//Get the maincard components moved into this file.
//Also move buttons, navbar, and search bar into this as well.
//You want the MiniCard intro to have everything necessary to make it your home screen. Right now most things are in MainCard.
