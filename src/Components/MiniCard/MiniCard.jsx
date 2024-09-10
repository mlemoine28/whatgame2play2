import styles from "./MiniCard.module.css";
import FormSubmit from "../FormSubmit/FormSubmit";
import GamingConsoles from "../../assets/GamingConsolesPic.jpg";

export default function MiniCard({ title, text1, text2, options }) {
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
