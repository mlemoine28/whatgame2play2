import React from "react";
import styles from "./MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";


export default function MiniCardQuestions({ title, text1, text2, options }) {
  return (
    <div className={styles.container}>
             <div className={styles.titlecontainer}>
        <div><h1>{text1}</h1></div>
      </div>
      <div className={styles.textcontainer}>
        <div>{text2}<FormSubmit /></div>
      </div>
    </div>
  );
}
